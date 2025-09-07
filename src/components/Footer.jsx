import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sandhyasinghm/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-blue-500"
      >
        <FaLinkedin size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/sandhyaasingh"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-gray-400"
      >
        <FaGithub size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/saandhyasingh/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-pink-500"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;
