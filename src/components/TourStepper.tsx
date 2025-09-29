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
    <div className="card-cosmic p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
        Mission Progress
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <button
              onClick={() => onStepClick(step.id)}
              className={`
                relative flex items-center justify-center w-12 h-12 rounded-full border-2 
                transition-all duration-300 cursor-pointer group
                ${step.completed 
                  ? 'bg-success border-success text-success-foreground' 
                  : step.current 
                    ? 'bg-primary border-primary text-primary-foreground glow-primary' 
                    : 'bg-muted border-border text-muted-foreground hover:border-primary/50'
                }
              `}
            >
              {step.completed ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </button>

            {/* Step Info */}
            <div className="ml-4 text-left hidden md:block">
              <div className={`text-sm font-medium ${step.current ? 'text-primary' : 'text-foreground'}`}>
                {step.title}
              </div>
              <div className="text-xs text-muted-foreground max-w-32">
                {step.description}
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`
                hidden md:block w-16 h-0.5 ml-6
                ${step.completed ? 'bg-success' : 'bg-border'}
                transition-colors duration-300
              `} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Step Info */}
      <div className="md:hidden mt-4">
        {steps.map((step) => (
          step.current && (
            <div key={step.id} className="text-center">
              <div className="text-sm font-medium text-primary mb-1">
                {step.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {step.description}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}