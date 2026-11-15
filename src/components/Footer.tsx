import { Link } from "react-router-dom";
import { site } from "@/lib/site";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  twitter: "X / Twitter",
  github: "GitHub",
};

const Footer = () => {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  const hasContact = Boolean(site.contactEmail) || socials.length > 0;

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className={`grid grid-cols-1 gap-8 ${hasContact ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          <div className="space-y-4">
            <div className="text-2xl font-bold text-eureka-blue">EurekaLabs</div>
            <p className="text-gray-400">
              A research organization of AI Scientists for protein drug design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#our-mission" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/posts" className="hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/#topics" className="hover:text-white transition-colors">What We Do</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-white transition-colors">How a Campaign Runs</Link></li>
            </ul>
          </div>

          {hasContact && (
          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            {site.contactEmail && (
              <p className="text-gray-400 mb-4">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {site.contactEmail}
                </a>
              </p>
            )}
            {socials.length > 0 && (
              <ul className="space-y-2 text-gray-400">
                {socials.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {socialLabels[key] ?? key}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          )}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EurekaLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
