import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScenarioCard from "./ScenarioCard";
import impactExplosion from "@/assets/impact-explosion.jpg";

interface ActTwoProps {
  onContinue: () => void;
}

const scenarios = [
  {
    id: "airburst",
    title: "Atmospheric Airburst",
    description: "Asteroid breaks apart in the atmosphere, creating a powerful shockwave without ground impact.",
    severity: "medium" as const,
    impactType: "Atmospheric",
    estimatedDamage: "Regional damage",
    image: impactExplosion
  },
  {
    id: "ground",
    title: "Ground Impact",
    description: "Direct surface impact creating a crater and intense local destruction.",
    severity: "high" as const,
    impactType: "Terrestrial",
    estimatedDamage: "Severe local damage",
    image: impactExplosion
  },
  {
    id: "ocean",
    title: "Ocean Impact",
    description: "Impact in ocean generating massive tsunamis affecting coastal regions worldwide.",
    severity: "high" as const,
    impactType: "Marine",
    estimatedDamage: "Global tsunamis",
    image: impactExplosion
  },
  {
    id: "chicxulub",
    title: "Chicxulub-Scale Event",
    description: "Massive impact similar to the event that ended the age of dinosaurs.",
    severity: "extreme" as const,
    impactType: "Global",
    estimatedDamage: "Mass extinction",
    image: impactExplosion
  }
];

export default function ActTwo({ onContinue }: ActTwoProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const handleScenarioSelect = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    // Here you would typically show detailed scenario analysis
  };

  return (
    <section className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-destructive uppercase tracking-wider mb-4">
            Act 2: Threat Exploration
          </div>
          
          <h2 className="text-cosmic-title mb-6">
            Choose Your Impact Scenario
          </h2>
          
          <p className="text-cosmic-subtitle max-w-3xl mx-auto">
            Explore different impact scenarios based on asteroid size, composition, 
            and target location. Each scenario shows realistic scientific data 
            about potential consequences and aftermath.
          </p>
        </div>

        {/* Scenario Selection */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {scenarios.map((scenario) => (
            <ScenarioCard
              key={scenario.id}
              title={scenario.title}
              description={scenario.description}
              severity={scenario.severity}
              impactType={scenario.impactType}
              estimatedDamage={scenario.estimatedDamage}
              image={scenario.image}
              onSelect={() => handleScenarioSelect(scenario.id)}
            />
          ))}
        </div>

        {/* Selected Scenario Analysis */}
        {selectedScenario && (
          <div className="card-cosmic p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Scenario Analysis: {scenarios.find(s => s.id === selectedScenario)?.title}
              </h3>
              <p className="text-muted-foreground">
                Interactive controls and real-time data visualization
              </p>
            </div>

            {/* Impact Parameters */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Asteroid Parameters</h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Diameter (meters)
                    </label>
                    <input 
                      type="range" 
                      min="50" 
                      max="1000" 
                      defaultValue="300"
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-xs text-center text-primary font-semibold">300m</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Velocity (km/s)
                    </label>
                    <input 
                      type="range" 
                      min="11" 
                      max="72" 
                      defaultValue="25"
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-xs text-center text-primary font-semibold">25 km/s</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Impact Angle (degrees)
                    </label>
                    <input 
                      type="range" 
                      min="15" 
                      max="90" 
                      defaultValue="45"
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-xs text-center text-primary font-semibold">45°</div>
                  </div>
                </div>
              </div>

              {/* Impact Results */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Impact Effects</h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Energy Released:</span>
                    <span className="font-semibold text-warning">15 MT TNT</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Crater Diameter:</span>
                    <span className="font-semibold text-destructive">3.2 km</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fireball Radius:</span>
                    <span className="font-semibold text-warning">2.8 km</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seismic Magnitude:</span>
                    <span className="font-semibold text-destructive">6.2</span>
                  </div>
                </div>
              </div>

              {/* Aftermath Timeline */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Aftermath Timeline</h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">T+0 seconds:</span>
                    <span className="text-destructive">Impact & fireball</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">T+30 seconds:</span>
                    <span className="text-warning">Shockwave spreads</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">T+2 minutes:</span>
                    <span className="text-muted-foreground">Debris fallout</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">T+1 hour:</span>
                    <span className="text-muted-foreground">Dust cloud formation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Modes */}
            <div className="flex gap-4 justify-center mb-8">
              <Button variant="glass" size="sm">Simplified View</Button>
              <Button variant="outline" size="sm">Scientific Data</Button>
            </div>
          </div>
        )}

        {/* Continue to Act 3 */}
        <div className="text-center">
          <Button 
            variant="success" 
            size="lg" 
            onClick={onContinue}
            className="glow-primary"
          >
            Explore Planetary Defense →
          </Button>
        </div>
      </div>
    </section>
  );
}