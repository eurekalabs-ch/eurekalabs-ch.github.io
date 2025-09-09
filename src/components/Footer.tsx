
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-eureka-blue">EurekaLabs</div>
            <p className="text-gray-400">
              Accelerating scientific discovery through AI-powered research tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/#our-mission" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/posts" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/#products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/#topics" className="hover:text-white transition-colors">Topics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest research insights</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-eureka-blue hover:bg-eureka-blue/90 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EurekaLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
