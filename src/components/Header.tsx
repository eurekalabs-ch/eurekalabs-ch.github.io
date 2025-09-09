
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold text-eureka-blue hover:text-eureka-blue/80 transition-colors">
            EurekaLabs
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#products" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Products
          </Link>
          <Link to="/posts" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Blog
          </Link>
          <Link to="/#our-mission" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            About Us
          </Link>
          <Link to="/careers" className="text-sm font-medium hover:text-eureka-blue transition-colors">
            Careers
          </Link>
        </nav>
        
        <Button asChild className="bg-eureka-blue hover:bg-eureka-blue/90">
          <a href="https://www.reseatchpilot.me" target="_blank" rel="noopener noreferrer">
            Try Research Pilot
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
