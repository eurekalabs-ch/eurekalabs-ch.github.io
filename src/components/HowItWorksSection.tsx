
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Upload data or enter research topic",
      description: "Start with your research data, papers, or simply describe your research interests."
    },
    {
      step: "2", 
      title: "Literature synthesis and knowledge graph generation",
      description: "AI analyzes thousands of papers and builds a personalized knowledge network."
    },
    {
      step: "3",
      title: "Hypothesis and proposal suggestion",
      description: "Generate novel hypotheses and research proposals based on identified knowledge gaps."
    },
    {
      step: "4",
      title: "Iterate, refine, and personalize",
      description: "The system learns from your feedback to provide increasingly relevant suggestions."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How EurekaLabs Accelerates Discovery</h2>
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
