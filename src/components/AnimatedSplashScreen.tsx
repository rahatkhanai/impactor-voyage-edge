import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "./ui/button";

interface AnimatedSplashScreenProps {
  onComplete: () => void;
}

const AnimatedSplashScreen = ({ onComplete }: AnimatedSplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        handleComplete();
      }
    });

    // Animate gradient background
    tl.fromTo(
      ".splash-bg",
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    // Animate stars
    tl.fromTo(
      ".star",
      { opacity: 0, scale: 0, rotation: 0 },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );

    // Animate orbit rings
    tl.fromTo(
      ".orbit-ring",
      { scale: 0, opacity: 0, rotation: 0 },
      {
        scale: 1,
        opacity: 0.3,
        rotation: 180,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      },
      "-=0.6"
    );

    // Animate title text
    tl.fromTo(
      ".splash-title",
      { y: 100, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      },
      "-=1"
    );

    // Animate subtitle
    tl.fromTo(
      ".splash-subtitle",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5"
    );

    // Animate asteroid
    tl.fromTo(
      ".asteroid",
      { x: -200, y: -200, opacity: 0, rotation: 0, scale: 0.5 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 720,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      },
      "-=0.8"
    );

    // Pulse effect
    tl.to(
      ".asteroid",
      {
        scale: 1.1,
        duration: 0.5,
        repeat: 2,
        yoyo: true,
        ease: "sine.inOut"
      },
      "-=0.5"
    );

    // Hold for a moment
    tl.to({}, { duration: 1 });

    // Fade out everything
    tl.to(container, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleComplete = () => {
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 100);
  };

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: handleComplete
    });
  };

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="splash-bg absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black" />

      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="starGradient">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 50 }).map((_, i) => (
          <circle
            key={i}
            className="star"
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 2 + 1}
            fill="url(#starGradient)"
            opacity="0"
          />
        ))}
      </svg>

      {/* Orbit rings */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <circle
          className="orbit-ring"
          cx="50%"
          cy="50%"
          r="200"
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="2"
          opacity="0"
        />
        <circle
          className="orbit-ring"
          cx="50%"
          cy="50%"
          r="300"
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="1.5"
          opacity="0"
        />
        <circle
          className="orbit-ring"
          cx="50%"
          cy="50%"
          r="400"
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="1"
          opacity="0"
        />
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-6 px-6">
        {/* Asteroid icon */}
        <div className="asteroid flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 rounded-full opacity-80 blur-xl absolute inset-0" />
            <svg
              className="w-24 h-24 relative"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="40" fill="#ff6b00" opacity="0.9" />
              <circle cx="35" cy="35" r="5" fill="#cc5500" opacity="0.7" />
              <circle cx="60" cy="30" r="7" fill="#cc5500" opacity="0.7" />
              <circle cx="65" cy="60" r="6" fill="#cc5500" opacity="0.7" />
              <circle cx="40" cy="65" r="4" fill="#cc5500" opacity="0.7" />
              <circle cx="50" cy="50" r="3" fill="#aa3300" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="splash-title text-5xl md:text-7xl font-black text-white opacity-0">
          IMPACTOR-2025
        </h1>

        {/* Subtitle */}
        <p className="splash-subtitle text-xl md:text-2xl text-blue-300 font-semibold opacity-0">
          Asteroid Impact Simulation Experience
        </p>
      </div>

      {/* Skip button */}
      <Button
        onClick={handleSkip}
        variant="outline"
        size="sm"
        className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
      >
        Skip Animation
      </Button>
    </div>
  );
};

export default AnimatedSplashScreen;
