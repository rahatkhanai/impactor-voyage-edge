import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    
    // Create Earth-like gradient
    const gradient = context.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#1e40af'); // Deep blue for oceans
    gradient.addColorStop(0.3, '#2563eb');
    gradient.addColorStop(0.6, '#059669'); // Green for land
    gradient.addColorStop(0.8, '#16a34a');
    gradient.addColorStop(1, '#1e40af');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 256);
    
    // Add some continent-like shapes
    context.fillStyle = '#059669';
    context.beginPath();
    context.arc(100, 100, 30, 0, Math.PI * 2);
    context.arc(300, 150, 40, 0, Math.PI * 2);
    context.arc(450, 80, 25, 0, Math.PI * 2);
    context.fill();
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        map={earthTexture} 
        emissive={new THREE.Color(0x112244)}
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
}

function Asteroid() {
  const asteroidRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (asteroidRef.current) {
      const time = state.clock.getElapsedTime();
      asteroidRef.current.position.x = Math.cos(time * 0.5) * 3;
      asteroidRef.current.position.z = Math.sin(time * 0.5) * 3;
      asteroidRef.current.rotation.x += 0.02;
      asteroidRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={asteroidRef} position={[3, 0, 0]}>
      <icosahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial 
        color="#ff6b00" 
        emissive="#ff3300" 
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function TrajectoryLine() {
  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,
      3, 3,
      0, 2 * Math.PI,
      false,
      0
    );
    
    const points3D = curve.getPoints(100).map(point => 
      new THREE.Vector3(point.x, 0, point.y)
    );
    
    return points3D;
  }, []);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00ffff" transparent opacity={0.6} linewidth={2} />
    </line>
  );
}

interface Earth3DProps {
  className?: string;
}

export default function Earth3D({ className }: Earth3DProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0099ff" />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        
        <Earth />
        <Asteroid />
        <TrajectoryLine />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          maxDistance={8}
          minDistance={3}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}