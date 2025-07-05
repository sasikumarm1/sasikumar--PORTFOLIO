import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/sasikumar-m',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/sasikumar-m',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      url: 'sasikumar23125@gmail.com',
      label: 'Email',
      color: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gray-900 border-t border-gray-800' 
        : 'bg-white border-t border-gray-200'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5' 
            : 'bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50'
        }`}></div>
        <div className={`absolute top-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SasiKumar M
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Full Stack Developer specializing in Python backend and React frontend development. 
                Passionate about creating innovative solutions and building modern web applications.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:bg-gray-800' 
                        : 'text-gray-600 hover:bg-gray-100'
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left text-sm transition-colors duration-300 hover:text-blue-400 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h4>
              <div className="space-y-2">
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  📍 Gandhi Park, Coimbatore
                </p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  ✉️ sasikumar.dev@gmail.com
                </p>
              </div>
              <button
                onClick={scrollToTop}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className={`border-t mb-6 ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Built With */}
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Built with</span>
              <Heart size={14} className="text-red-500" />
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>using</span>
              <Code size={14} className="text-blue-400" />
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>React, TypeScript & Tailwind CSS</span>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                © {currentYear} SasiKumar M. All rights reserved.
              </span>
            </div>
          </div>

          {/* Powered By */}
          <div className="text-center mt-4 pt-4 border-t border-gray-700/30">
            <div className="flex items-center justify-center space-x-2 text-xs">
              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>Powered by</span>
              <Coffee size={12} className="text-yellow-600" />
              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>and lots of dedication</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;