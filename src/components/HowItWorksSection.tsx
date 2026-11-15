
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "The brief becomes an objective",
      description: "A target and an assay are converted into explicit objectives, constraints and the criteria a candidate has to satisfy to count as a success."
    },
    {
      step: "2",
      title: "Independent strategies design in parallel",
      description: "Several generators propose candidates from different hypotheses, so that one wrong assumption cannot take the whole batch down with it."
    },
    {
      step: "3",
      title: "A finite budget is allocated",
      description: "Structural, energetic and specificity evaluations narrow the field, and a critic attacks the team's own conclusions before anything is selected for the laboratory."
    },
    {
      step: "4",
      title: "The measurement comes back, and is kept",
      description: "The assay settles the question. Calibration, failure memory and design rules are updated, so the next campaign starts from what this one cost."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How a campaign runs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg border h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-eureka-blue to-eureka-purple rounded-full text-white font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-eureka-blue w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
