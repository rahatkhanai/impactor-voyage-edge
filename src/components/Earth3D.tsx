import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#4285f4"
        emissive="#001122"
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