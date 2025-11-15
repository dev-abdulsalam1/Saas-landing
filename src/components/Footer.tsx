import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer  () {
  return (
    <footer id="help" className="bg-[#010D3E] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white">FocusWave</h2>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Helping teams stay productive, organized, and focused on what matters most.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Product
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="https://twitter.com" target="_blank" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} FocusWave. All rights reserved developed by  <a target="_" href="https://abdulsalam-ten.vercel.app/" className="font-extrabold text-blue-600">Abdulsalam</a>.
        </div>
      </div>
    </footer>
  );
};
