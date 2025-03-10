import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-10">
      <div className="container mx-auto text-center text-white">
        {/* Sosyal medya ikonları */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/seher-emir-15aa2b247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-blue-700 transition duration-300" />
          </a>
          <a href="https://github.com/seheremir" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="hover:text-gray-400 transition duration-300" />
          </a>
    
          <a href="https://www.instagram.com/seheremir0/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-pink-500 transition duration-300" />
          </a>

        </div>

        {/* Footer metni */}
        <p className="text-sm text-gray-400">© 2025 Seher Emir</p>
      </div>
    </footer>
  );
};

export default Footer;
