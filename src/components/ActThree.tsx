import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Orbit, Sun, Zap, Shield, Target, Gauge, Clock } from "lucide-react";

interface ActThreeProps {
  onComplete: () => void;
}

const mitigationStrategies = [
  {
    id: "kinetic",
    title: "Kinetic Impactor",
    emoji: "🚀",
    tagline: "The Space Bumper Car",
    headline: "Crash and Deflect",
    icon: Rocket,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    howItWorks: "A spacecraft is launched directly at the asteroid and crashes into it at very high speed. The collision transfers energy (momentum) to the asteroid, nudging it onto a slightly different path.",
    whyEffective: "Even a small orbital shift, if done years before the predicted impact, makes the asteroid miss Earth entirely.",
    realExample: "In 2022, NASA's DART mission successfully hit the asteroid moonlet Dimorphos and changed its orbit — the first real-world test of this idea.",
    bestFor: "Small-to-medium asteroids with enough warning time.",
    infographics: ["spacecraft crashing into asteroid", "arrows showing orbital shift", "NASA DART mission logo", "Dimorphos orbit diagram"]
  },
  {
    id: "gravity",
    title: "Gravitational Tractor",
    emoji: "🌌",
    tagline: "The Space Tugboat",
    headline: "Gentle Gravitational Pull",
    icon: Orbit,
    color: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    howItWorks: "A heavy spacecraft parks itself close to the asteroid and hovers there. The spacecraft's gravity pulls slightly on the asteroid. Over many years, this 'gravitational tug' slowly shifts the asteroid's path.",
    whyEffective: "It doesn't rely on hitting or blowing up the asteroid — it's precise and controlled.",
    challenges: "Requires decades of time and highly stable hovering technology.",
    bestFor: "Asteroids detected many decades in advance.",
    infographics: ["spacecraft hovering near asteroid", "curved gravitational pull lines", "slow orbital change arrows", "tractor tug animation metaphor"]
  },
  {
    id: "solar",
    title: "Solar Sails",
    emoji: "☀️",
    tagline: "The Space Wind Push",
    headline: "Sunlight as a Push",
    icon: Sun,
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    howItWorks: "A giant reflective sail is attached to or deployed near the asteroid. Sunlight bounces off the sail, and the tiny pressure from light particles (photons) gently pushes the asteroid.",
    whyEffective: "The push is weak, but constant. Over years, it can significantly change the orbit.",
    challenges: "Needs very lightweight but massive sails, and very long lead times.",
    bestFor: "Small asteroids with lots of warning time.",
    infographics: ["huge reflective sail next to asteroid", "beams of sunlight bouncing", "orbit shift arrows", "futuristic mirror-like visuals"]
  },
  {
    id: "laser",
    title: "Laser Ablation",
    emoji: "🔦",
    tagline: "The Space Blowtorch",
    headline: "The Laser Torch",
    icon: Zap,
    color: "from-red-500/20 to-pink-500/20",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    howItWorks: "Powerful lasers (from spacecraft or Earth) heat the asteroid's surface until rock vaporizes. Escaping gas jets act like thrusters, slowly pushing the asteroid away.",
    whyEffective: "It's very precise and works without touching the asteroid.",
    challenges: "Needs huge amounts of power and long operation time. Works better on smaller asteroids.",
    bestFor: "Medium asteroids where we have years to apply steady force.",
    infographics: ["giant laser beam hitting asteroid", "vapor plume jet pushing asteroid", "thrust arrows", "asteroid steaming effect"]
  }
];

export default function ActThree({ onComplete }: ActThreeProps) {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);

  const handleCardClick = (strategyId: string) => {
    setSelectedStrategy(selectedStrategy === strategyId ? null : strategyId);
  };

  const selectedStrategyData = mitigationStrategies.find(s => s.id === selectedStrategy);

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary mr-4" />
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-cosmic-hero mb-6">
            Can We Stop an Asteroid?
          </h1>
          
          <p className="text-cosmic-subtitle max-w-3xl mx-auto">
            Scientists have developed several strategies to protect Earth. Let's explore four of them.
          </p>
        </div>

        {/* Four Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mitigationStrategies.map((strategy) => {
            const IconComponent = strategy.icon;
            const isSelected = selectedStrategy === strategy.id;
            
            return (
              <Card 
                key={strategy.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 card-cosmic ${
                  isSelected ? 'ring-2 ring-primary scale-105' : ''
                }`}
                onClick={() => handleCardClick(strategy.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${strategy.color} border ${strategy.borderColor} mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${strategy.textColor}`} />
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-2">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{strategy.tagline}</p>
                  <div className="text-2xl">{strategy.emoji}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expanded Content */}
        {selectedStrategyData && (
          <div className="card-cosmic p-8 mb-12 animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div>
                  <h2 className={`text-3xl font-bold ${selectedStrategyData.textColor} mb-2`}>
                    {selectedStrategyData.headline}
                  </h2>
                  <h3 className="text-xl text-muted-foreground">{selectedStrategyData.tagline}</h3>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    How it Works:
                  </h4>
                  <p className="text-muted-foreground">{selectedStrategyData.howItWorks}</p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center">
                    <Gauge className="w-5 h-5 mr-2" />
                    Why it's Effective:
                  </h4>
                  <p className="text-muted-foreground">{selectedStrategyData.whyEffective}</p>
                </div>

                {selectedStrategyData.realExample && (
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Real Example:</h4>
                    <p className="text-muted-foreground">{selectedStrategyData.realExample}</p>
                  </div>
                )}

                {selectedStrategyData.challenges && (
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Challenges:</h4>
                    <p className="text-muted-foreground">{selectedStrategyData.challenges}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Best For:
                  </h4>
                  <p className="text-muted-foreground">{selectedStrategyData.bestFor}</p>
                </div>
              </div>

              {/* Right Column - Visual Placeholder */}
              <div className="space-y-4">
                <div className={`h-48 rounded-lg bg-gradient-to-br ${selectedStrategyData.color} border ${selectedStrategyData.borderColor} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`text-6xl ${selectedStrategyData.textColor} mb-2`}>{selectedStrategyData.emoji}</div>
                    <div className={`text-sm font-semibold ${selectedStrategyData.textColor}`}>
                      Animation Placeholder
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {selectedStrategyData.infographics.map((infographic, index) => (
                    <div key={index} className="text-xs text-muted-foreground p-2 bg-card/50 rounded border">
                      {infographic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Strategy Comparison */}
        <div className="card-cosmic p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Strategy Comparison
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mitigationStrategies.map((strategy) => (
              <div key={strategy.id} className="text-center space-y-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${strategy.color} border ${strategy.borderColor} mx-auto flex items-center justify-center`}>
                  <strategy.icon className={`w-6 h-6 ${strategy.textColor}`} />
                </div>
                <h4 className="font-bold text-foreground">{strategy.title}</h4>
                <p className="text-sm text-muted-foreground">{strategy.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Poll */}
        <div className="card-cosmic p-8 mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Which method would YOU choose to save Earth?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mitigationStrategies.map((strategy) => (
              <Button
                key={strategy.id}
                variant={selectedPoll === strategy.id ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-center space-y-2"
                onClick={() => setSelectedPoll(strategy.id)}
              >
                <div className="text-2xl">{strategy.emoji}</div>
                <div className="text-sm font-semibold">{strategy.title}</div>
              </Button>
            ))}
          </div>
          
          {selectedPoll && (
            <div className="mt-6 text-center">
              <p className="text-success font-semibold">
                Great choice! {mitigationStrategies.find(s => s.id === selectedPoll)?.title} is an excellent defense strategy.
              </p>
            </div>
          )}
        </div>

        {/* Complete Mission */}
        <div className="text-center space-y-6">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onComplete}
            className="glow-primary"
          >
            Mission Complete
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
          >
            Play Defend Earth Game
          </Button>
          
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Continue exploring with our interactive defense simulation game
          </p>
        </div>
      </div>
    </section>
  );
}