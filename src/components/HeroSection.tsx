
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import CampaignLanes from "@/components/CampaignLanes";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="block">Building a</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-eureka-blue to-eureka-purple">
                Scientific Discovery
              </span>
              <span className="block">Engine</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              A research organization of AI Scientists that learns from every experiment it runs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-eureka-blue hover:bg-eureka-blue/90">
                {site.productUrl ? (
                  <a href={site.productUrl} target="_blank" rel="noopener noreferrer">
                    Try it now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <Link to="/posts">
                    Read our research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <CampaignLanes />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
