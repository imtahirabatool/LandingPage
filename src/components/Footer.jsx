import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 footer-animation">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© 2024 SmartFlow. All rights reserved.</p>
        <p className="mb-6">Designed and developed by Tahira.</p>

        <div className="flex justify-center mb-6">
          <a
            href="https://x.com/imtahirabatool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mx-2 text-xl icon-animation"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/imtahirabatool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 mx-2 text-xl icon-animation"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/imtahirabatool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 mx-2 text-xl icon-animation"
          >
            <FaGithub />
          </a>
        </div>

        <div className="text-sm">
          <a
            href="#privacy-policy"
            className="hover:text-blue-400 mx-2 link-animation"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#contact"
            className="hover:text-blue-400 mx-2 link-animation"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
