
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Personal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eureka-blue to-eureka-purple">
                Scientific Discovery
              </span>{" "}
              Engine
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              The world's first full-circle platform for AI-based accelerated discovery
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-eureka-blue hover:bg-eureka-blue/90">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Try Now
              </Button>
              <Button size="lg" variant="ghost" className="text-eureka-blue hover:text-eureka-blue/80">
                Watch Overview
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 p-8 bg-white rounded-2xl shadow-lg border">
              <div className="flex flex-col items-center space-y-2 animate-float">
                <div className="w-12 h-12 bg-eureka-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧬</span>
                </div>
                <span className="text-sm font-medium">Data Input</span>
              </div>
              
              <ArrowRight className="text-eureka-blue animate-pulse" />
              
              <div className="flex flex-col items-center space-y-2 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 bg-eureka-purple/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <span className="text-sm font-medium">Literature</span>
              </div>
              
              <ArrowRight className="text-eureka-purple animate-pulse" />
              
              <div className="flex flex-col items-center space-y-2 animate-float" style={{animationDelay: '1s'}}>
                <div className="w-12 h-12 bg-eureka-cyan/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <span className="text-sm font-medium">Hypotheses</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-eureka-blue/5 to-eureka-purple/5 rounded-2xl border">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📑</span>
                </div>
                <span className="text-sm font-medium">Proposals</span>
              </div>
              
              <ArrowRight className="text-green-600" />
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔁</span>
                </div>
                <span className="text-sm font-medium">Learning Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
