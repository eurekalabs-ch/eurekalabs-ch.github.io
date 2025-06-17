
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Helped me formulate a testable idea I hadn't considered in months.",
      author: "PhD researcher, ETH",
      avatar: "👨‍🔬"
    },
    {
      quote: "It's like having a collaborator who never sleeps.",
      author: "PI, Yale Med",
      avatar: "👩‍⚕️"
    },
    {
      quote: "EurekaLabs identified connections in my data that I completely missed.",
      author: "Research Scientist, Stanford",
      avatar: "👩‍🔬"
    },
    {
      quote: "The hypothesis generation feature saved me weeks of literature review.",
      author: "Postdoc, MIT",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section className="py-24 bg-white" id="use-cases">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Researchers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
