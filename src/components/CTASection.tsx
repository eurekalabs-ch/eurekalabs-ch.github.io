import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-eureka-blue to-eureka-purple">
      <div className="container px-4 md:px-6">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a target and an assay?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We run design campaigns with partners, and we report what the measurements say.
          </p>
          <Button asChild size="lg" className="bg-white text-eureka-blue hover:bg-gray-100">
            {site.productUrl ? (
              <a href={site.productUrl} target="_blank" rel="noopener noreferrer">
                Try Research Pilot
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            ) : site.contactEmail ? (
              <a href={`mailto:${site.contactEmail}`}>
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            ) : (
              <Link to="/posts">
                Read our research
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
