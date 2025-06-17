
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-eureka-blue to-eureka-purple">
      <div className="container px-4 md:px-6">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to accelerate your next discovery?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of researchers already using EurekaLabs
          </p>
          <Button size="lg" className="bg-white text-eureka-blue hover:bg-gray-100">
            Try EurekaLabs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
