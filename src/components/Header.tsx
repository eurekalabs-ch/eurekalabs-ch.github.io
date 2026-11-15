import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { to: "/#topics", label: "What We Do" },
  { to: "/posts", label: "Research" },
  { to: "/#our-mission", label: "About Us" },
  { to: "/careers", label: "Careers" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold text-eureka-blue hover:text-eureka-blue/80 transition-colors">
            EurekaLabs
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium hover:text-eureka-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-eureka-blue hover:bg-eureka-blue/90">
            {site.productUrl ? (
              <a href={site.productUrl} target="_blank" rel="noopener noreferrer">
                Try Research Pilot
              </a>
            ) : (
              <Link to="/posts">Read our research</Link>
            )}
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-base font-medium py-1 hover:text-eureka-blue transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
