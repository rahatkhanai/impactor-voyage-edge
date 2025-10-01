import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Sun, Satellite } from "lucide-react";

interface ActThreeProps {
  onComplete: () => void;
}

const mitigationStrategies = [
  {
    id: "kinetic",
    title: "🚀 Kinetic Impactor",
    description: "This strategy involves sending a spacecraft to crash directly into the asteroid at very high speed. The impact transfers momentum to the asteroid, nudging it slightly off its original path. Even a small deflection can make a big difference if done years before a potential impact.",
    video: "/videos/kinetic_impactor.mp4",
    icon: Rocket,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    hoverBg: "hover:bg-blue-500/20"
  },
  {
    id: "nuclear",
    title: "☢️ Nuclear Detonation",
    description: "In this method, a nuclear device is detonated close to the asteroid's surface—not to blow it up, but to vaporize part of it. The intense heat creates a burst of energy that pushes the asteroid onto a safer trajectory. It's one of the most powerful and last-resort options.",
    video: "/videos/nuclear_detonation.mp4",
    icon: Zap,
    color: "from-orange-400 to-red-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-400/30",
    hoverBg: "hover:bg-orange-500/20"
  },
  {
    id: "gravity",
    title: "🌌 Gravity Tractor",
    description: "A spacecraft flies alongside the asteroid for months or years, using its own tiny gravitational pull to slowly tug the asteroid off course. This method is very precise and controlled, though it requires a long lead time to work effectively.",
    video: "/videos/gravity_tractor.mp4",
    icon: Satellite,
    color: "from-purple-400 to-indigo-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30",
    hoverBg: "hover:bg-purple-500/20"
  },
  {
    id: "laser",
    title: "🔥 Laser Ablation",
    description: "High-powered lasers are aimed at the asteroid's surface, heating it until material vaporizes and shoots off like a small rocket jet. This creates a steady push that gradually shifts the asteroid's path without requiring a big collision or explosion.",
    video: "/videos/laser_ablation.mp4",
    icon: Zap,
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-500/10", 
    borderColor: "border-red-400/30",
    hoverBg: "hover:bg-red-500/20"
  }
];

export default function ActThree({ onComplete }: ActThreeProps) {
  const [hoveredStrategy, setHoveredStrategy] = useState<string | null>(null);
  const [clickedStrategy, setClickedStrategy] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-background via-background/95 to-background">
      {/* Starry background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Can We Stop an Asteroid?
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Scientists have developed several strategies to protect Earth.<br />
            Let's explore four of them.
          </p>
        </div>

        {/* Strategy Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {mitigationStrategies.map((strategy) => {
            const IconComponent = strategy.icon;
            const isHovered = hoveredStrategy === strategy.id;
            const isClicked = clickedStrategy === strategy.id;
            
            return (
              <div
                key={strategy.id}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer
                  ${strategy.bgColor} ${strategy.borderColor} ${strategy.hoverBg}
                  ${isHovered ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
                  ${isClicked ? 'ring-2 ring-primary' : ''}
                `}
                onMouseEnter={() => setHoveredStrategy(strategy.id)}
                onMouseLeave={() => setHoveredStrategy(null)}
                onClick={() => setClickedStrategy(clickedStrategy === strategy.id ? null : strategy.id)}
              >
                {/* Video area */}
                <div className="relative h-48 mb-6 rounded-xl bg-gradient-to-br from-card/20 to-card/5 overflow-hidden">
                  <video 
                    src={strategy.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Icon overlay */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${strategy.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{strategy.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center space-y-6">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onComplete}
            className="glow-primary"
          >
            Continue Mission
          </Button>
          
          <p className="text-sm text-foreground/60 max-w-md mx-auto">
            These are the main strategies scientists use to defend Earth from asteroid impacts
          </p>
        </div>
      </div>
    </section>
  );
}