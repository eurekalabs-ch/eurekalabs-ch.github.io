
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const features = [
    {
      icon: "📊",
      title: "Multimodal Data Analysis",
      description: "Ingest your own omics, lab, or clinical data seamlessly."
    },
    {
      icon: "🔍",
      title: "AI Literature Review",
      description: "Real-time synthesis of the most relevant scientific insights."
    },
    {
      icon: "💡",
      title: "Hypothesis Generation Engine",
      description: "LLM-based tools to uncover new scientific hypotheses."
    },
    {
      icon: "📄",
      title: "Interactive Proposal Generation",
      description: "Jump-start your next NSF, NIH, or ERC grant with AI-guided templates."
    },
    {
      icon: "🎯",
      title: "Focused on Research Goals",
      description: "Always aligned with your current research objectives."
    },
    {
      icon: "🧠",
      title: "Personalized AI Copilot",
      description: "Learns from your background, citations, and publication history."
    }
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why EurekaLabs?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
