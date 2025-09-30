import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Sun, Satellite } from "lucide-react";

interface ActThreeProps {
  onComplete: () => void;
}

const mitigationStrategies = [
  {
    id: "kinetic",
    title: "Kinetic Impactor",
    subtitle: "The Space Bumper Car",
    description: "A spacecraft slams into the asteroid at high speed, nudging it into a safer orbit. Tested by NASA's DART mission in 2022.",
    keywords: "spacecraft impact, asteroid deflection, momentum transfer, shockwave arrows",
    icon: Rocket,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-400/30",
    hoverBg: "hover:bg-blue-500/20"
  },
  {
    id: "gravitational",
    title: "Gravitational Tractor",
    subtitle: "The Space Tugboat", 
    description: "A nearby spacecraft slowly tugs the asteroid using gravity alone. Gentle but steady pull over years.",
    keywords: "hovering spacecraft, gravity field lines, asteroid path curve, tractor beam style pull",
    icon: Satellite,
    color: "from-purple-400 to-indigo-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-400/30",
    hoverBg: "hover:bg-purple-500/20"
  },
  {
    id: "solar",
    title: "Solar Sails",
    subtitle: "The Space Wind Push",
    description: "Huge reflective sails push the asteroid with sunlight. Small force, long time, big results.",
    keywords: "large reflective sail, solar rays bouncing, gentle push arrows, glowing sun",
    icon: Sun,
    color: "from-yellow-400 to-orange-400", 
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-400/30",
    hoverBg: "hover:bg-yellow-500/20"
  },
  {
    id: "laser",
    title: "Laser Ablation",
    subtitle: "The Space Blowtorch",
    description: "Powerful lasers vaporize asteroid surface, creating jets of gas that push it off course.",
    keywords: "laser beams, asteroid surface vapor, thrust jet arrows, glowing hot spots",
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
                {/* Background illustration area */}
                <div className="relative h-48 mb-6 rounded-xl bg-gradient-to-br from-card/20 to-card/5 overflow-hidden">
                  {/* Icon */}
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br ${strategy.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Simple illustration based on strategy */}
                  {strategy.id === 'kinetic' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-12 rounded-full bg-gray-600 ${isHovered ? 'animate-pulse' : ''}`}></div>
                      <div className={`w-8 h-4 bg-gradient-to-r ${strategy.color} rounded-full ml-2 ${isHovered ? 'translate-x-4' : ''} transition-transform duration-500`}></div>
                      {isHovered && (
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {strategy.id === 'gravitational' && (
                    <div className="absolute inset-0 flex items-center justify-center space-x-8">
                      <div className={`w-6 h-6 bg-gradient-to-r ${strategy.color} rounded-full ${isHovered ? 'animate-pulse' : ''}`}></div>
                      <div className="relative">
                        <div className="w-16 h-10 rounded-full bg-gray-600"></div>
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400 animate-spin"></div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {strategy.id === 'solar' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-10 rounded-full bg-gray-600"></div>
                      <div className={`w-12 h-16 bg-gradient-to-b ${strategy.color} opacity-70 ml-4 transform skew-x-12 ${isHovered ? 'scale-110' : ''} transition-transform duration-500`}></div>
                      {isHovered && (
                        <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                      )}
                    </div>
                  )}
                  
                  {strategy.id === 'laser' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-16 h-10 rounded-full bg-gray-600">
                        {isHovered && (
                          <>
                            <div className="absolute top-0 right-0 w-1 h-8 bg-red-400 transform rotate-45 origin-bottom"></div>
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{strategy.title}</h3>
                  <p className="text-lg text-foreground/70 mb-4">{strategy.subtitle}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{strategy.description}</p>
                  
                  {/* Infographic keywords */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs text-foreground/50 italic">{strategy.keywords}</p>
                  </div>
                </div>

                {/* Interaction indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-foreground/50 bg-card/80 px-2 py-1 rounded">
                    {strategy.id === 'solar' ? 'Click to interact' : 'Hover to see effect'}
                  </div>
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