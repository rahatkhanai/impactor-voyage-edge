import { Button } from "@/components/ui/button";
import { Atom, Zap, Telescope } from "lucide-react";

interface ActOneProps {
  onContinue: () => void;
}

export default function ActOne({ onContinue }: ActOneProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        
        {/* Main Title */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-warning bg-clip-text text-transparent mb-8">
            Understanding Asteroid Impact
          </h1>
        </div>

        {/* Infographic Box #1 - What is an asteroid */}
        <div className="card-cosmic p-8 flex items-start gap-6 animate-fade-in hover:shadow-cosmic transition-all duration-300">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/30">
              <Atom className="w-8 h-8 text-accent" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Do you know what an asteroid is?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An asteroid is a small, rocky or metallic body that orbits the Sun, 
              acting as a remnant from the solar system's early formation.
            </p>
          </div>
        </div>

        {/* Short Description */}
        <div className="text-center animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Asteroids orbit the Sun in elliptical paths. Occasionally, their trajectories 
            may cross Earth's orbit — which can lead to a possible impact. 🚀
          </p>
        </div>

        {/* Infographic Box #2 - What is an asteroid impact */}
        <div className="card-cosmic p-8 flex items-start gap-6 animate-fade-in hover:shadow-cosmic transition-all duration-300">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-warning/20 to-warning/10 flex items-center justify-center border border-warning/30">
              <Zap className="w-8 h-8 text-warning" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Do you know what an asteroid impact is?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An asteroid impact is the collision of an asteroid with Earth, causing 
              immediate destructive effects like shockwaves, thermal radiation, and tsunamis, 
              followed by long-term consequences including atmospheric dust that blocks 
              sunlight and triggers climate change, potential global devastation, and 
              damage to ecosystems and infrastructure.
            </p>
          </div>
        </div>

        {/* Infographic Box #3 - 3D Simulation */}
        <div className="card-cosmic p-8 animate-fade-in hover:shadow-cosmic transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30">
                  <Telescope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Want to check if any asteroid is coming or not?
                </h3>
              </div>
              <p className="text-muted-foreground">
                Click on any asteroid to see its orbit.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-card/50 rounded-xl border border-border/50 h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Telescope className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">3D Orbit Simulation Here</p>
                  <p className="text-xs mt-1 opacity-75">(Interactive simulation placeholder)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8 animate-fade-in">
          <Button 
            variant="cosmic" 
            size="xl" 
            onClick={onContinue}
            className="text-lg px-12 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-cosmic transition-all duration-300"
          >
            🚀 Let's see what can happen if an asteroid hits Earth
          </Button>
        </div>

      </div>
    </section>
  );
}