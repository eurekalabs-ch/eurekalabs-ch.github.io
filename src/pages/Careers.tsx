import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are always looking for motivated scientists and engineers as collaborators and
            potential future colleagues. The work sits where machine learning meets molecules:
            designing peptides and proteins, building the systems that evaluate them, and being
            judged by what the laboratory measures.
          </p>

          {site.contactEmail && (
            <div className="mt-10">
              <Button asChild size="lg" className="bg-eureka-blue hover:bg-eureka-blue/90">
                <a href={`mailto:${site.contactEmail}`}>
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
