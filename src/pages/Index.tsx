import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TourStepper from "@/components/TourStepper";
import ActOne from "@/components/ActOne";
import ActTwo from "@/components/ActTwo";
import ActThree from "@/components/ActThree";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState<"hero" | "act1" | "act2" | "act3" | "complete">("hero");

  const steps = [
    {
      id: "act1",
      title: "Act 1: Knowing the Asteroid",
      description: "Learn about Impactor-2025",
      completed: currentStep === "act2" || currentStep === "act3" || currentStep === "complete",
      current: currentStep === "act1"
    },
    {
      id: "act2", 
      title: "Act 2: Impact Scenario Simulation",
      description: "Explore impact scenarios",
      completed: currentStep === "act3" || currentStep === "complete",
      current: currentStep === "act2"
    },
    {
      id: "act3",
      title: "Act 3: Mitigation Strategies", 
      description: "Defense strategies",
      completed: currentStep === "complete",
      current: currentStep === "act3"
    }
  ];

  const handleStartTour = () => {
    setCurrentStep("act1");
  };

  const handleStepClick = (stepId: string) => {
    if (stepId === "act1" || stepId === "act2" || stepId === "act3") {
      setCurrentStep(stepId);
    }
  };

  const handleActOneComplete = () => {
    setCurrentStep("act2");
  };

  const handleActTwoComplete = () => {
    setCurrentStep("act3");
  };

  const handleActThreeComplete = () => {
    setCurrentStep("complete");
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero Section */}
        {currentStep === "hero" && (
          <HeroSection onStartTour={handleStartTour} />
        )}

      {/* Tour Navigation */}
      {currentStep !== "hero" && currentStep !== "complete" && (
        <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-primary/20">
          <div className="container mx-auto px-6 py-6">
            <TourStepper steps={steps} onStepClick={handleStepClick} />
          </div>
        </div>
      )}

      {/* Act Sections */}
      {currentStep === "act1" && (
        <ActOne onContinue={handleActOneComplete} />
      )}

      {currentStep === "act2" && (
        <ActTwo onContinue={handleActTwoComplete} />
      )}

      {currentStep === "act3" && (
        <ActThree onComplete={handleActThreeComplete} />
      )}

      {/* Mission Complete */}
      {currentStep === "complete" && (
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-cosmic-hero">Mission Complete</h1>
              <p className="text-cosmic-subtitle max-w-2xl mx-auto">
                You've successfully explored asteroid impact scenarios and 
                learned about planetary defense strategies. Earth is in good hands!
              </p>
            </div>

            <div className="card-cosmic p-8 max-w-md mx-auto">
              <h3 className="font-bold text-foreground mb-4">What's Next?</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scenarios Explored:</span>
                  <span className="font-semibold text-success">4/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Defense Strategies:</span>
                  <span className="font-semibold text-primary">2/2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Knowledge Level:</span>
                  <span className="font-semibold text-accent">Expert</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-lg border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-foreground mb-3">Data Sources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>NASA Center for Near Earth Object Studies</div>
                <div>European Space Agency SSA Programme</div>
                <div>USGS Earthquake Hazards Program</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-3">Educational Partners</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>NASA Space Apps Challenge</div>
                <div>Planetary Defense Conference</div>
                <div>International Asteroid Warning Network</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-3">Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                This is an educational simulation. All data represents 
                scientific estimates for educational purposes only.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            Built for NASA Space Apps Challenge 2025 • Impactor-2025 Educational Experience
          </div>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Index;
