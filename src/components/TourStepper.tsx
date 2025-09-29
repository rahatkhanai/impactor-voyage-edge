import { ChevronRight } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

interface TourStepperProps {
  steps: Step[];
  onStepClick: (stepId: string) => void;
}

export default function TourStepper({ steps, onStepClick }: TourStepperProps) {
  return (
    <div className="w-full">
      <div className="card-cosmic p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Mission Navigation
        </h3>
        
        {/* Desktop Layout - Horizontal with Arrows */}
        <div className="hidden md:flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => onStepClick(step.id)}
                className={`
                  relative p-4 rounded-lg border-2 transition-all duration-300 group
                  text-left hover:scale-105 hover:shadow-lg min-w-[200px]
                  ${step.current 
                    ? 'bg-primary/10 border-primary text-primary shadow-cosmic' 
                    : step.completed 
                      ? 'bg-success/10 border-success text-success hover:border-success/80' 
                      : 'bg-muted/30 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }
                `}
              >
                {/* Act Number Badge */}
                <div className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3
                  ${step.current 
                    ? 'bg-primary text-primary-foreground' 
                    : step.completed 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                  }
                `}>
                  {step.completed ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Act Title */}
                <div className="text-sm font-semibold mb-1 leading-tight">
                  {step.title}
                </div>

                {/* Act Description */}
                <div className="text-xs opacity-80">
                  {step.description}
                </div>
              </button>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div className="mx-2 text-primary/40">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden space-y-3">
          {steps.map((step, index) => (
            <div key={step.id} className="space-y-2">
              <button
                onClick={() => onStepClick(step.id)}
                className={`
                  w-full p-4 rounded-lg border-2 transition-all duration-300
                  text-left hover:scale-[1.02] hover:shadow-lg
                  ${step.current 
                    ? 'bg-primary/10 border-primary text-primary shadow-cosmic' 
                    : step.completed 
                      ? 'bg-success/10 border-success text-success hover:border-success/80' 
                      : 'bg-muted/30 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }
                `}
              >
                <div className="flex items-center space-x-4">
                  {/* Act Number Badge */}
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shrink-0
                    ${step.current 
                      ? 'bg-primary text-primary-foreground' 
                      : step.completed 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {step.completed ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>

                  {/* Act Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">
                      {step.title}
                    </div>
                    <div className="text-xs opacity-80">
                      {step.description}
                    </div>
                  </div>
                </div>
              </button>

              {/* Arrow Between Steps on Mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center text-primary/40">
                  <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}