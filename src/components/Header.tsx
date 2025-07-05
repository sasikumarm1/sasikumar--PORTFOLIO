import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Briefcase, Award, GraduationCap, Trophy, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setIsCollapsed(scrollPosition > 200);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'skills', 'certifications', 'education', 'hackathons', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Skills', href: '#skills', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Participations', href: '#hackathons', icon: Trophy },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? `${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl shadow-2xl border-b ${isDarkMode ? 'border-gray-800/50' : 'border-gray-200/50'}` 
        : 'bg-transparent'
    } ${isCollapsed ? 'py-2' : 'py-3 sm:py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ${
              isCollapsed ? 'text-lg' : ''
            }`}
          >
            SasiKumar M
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 xl:px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 group text-sm xl:text-base ${
                    isActive 
                      ? `${isDarkMode ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' : 'text-gray-900 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300'}` 
                      : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}`
                  } ${isCollapsed ? 'px-2 py-1 text-xs' : ''}`}
                >
                  <item.icon size={isCollapsed ? 12 : 14} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className={`relative ${isCollapsed ? 'hidden' : 'hidden xl:inline'}`}>
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    )}
                  </span>
                </button>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-yellow-400/10' 
                  : 'text-gray-600 hover:bg-gray-600/10'
              } ${isCollapsed ? 'p-1' : ''}`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={isCollapsed ? 16 : 20} /> : <Moon size={isCollapsed ? 16 : 20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-yellow-400/10' 
                  : 'text-gray-600 hover:bg-gray-600/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'text-white hover:bg-gray-800/50' 
                  : 'text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`mt-4 rounded-2xl p-4 border ${
            isDarkMode 
              ? 'bg-gray-800/95 border-gray-700/50' 
              : 'bg-white/95 border-gray-200/50'
          } backdrop-blur-xl`}>
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left transition-all duration-300 py-3 px-4 rounded-xl flex items-center space-x-3 group ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;