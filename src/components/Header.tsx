
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-eureka-blue">EurekaLabs</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Use Cases
          </a>
          <a href="#about" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            About
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Blog
          </a>
        </nav>
        
        <Button className="bg-eureka-blue hover:bg-eureka-blue/90">
          Try EurekaLabs
        </Button>
      </div>
    </header>
  );
};

export default Header;
