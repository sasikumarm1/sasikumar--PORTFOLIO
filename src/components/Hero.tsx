import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Github, Linkedin, Sparkles, Star, Instagram  } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkMode } = useTheme();
  
  const titles = [
    'Frontend Developer',
    'Python Developer', 
    'React Developer'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const currentTitle = titles[currentIndex];
    
    if (!isDeleting && displayText.length < currentTitle.length) {
      interval = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      interval = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      interval = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(interval);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const FloatingParticle = ({ delay, size = 'small' }: { delay: number; size?: 'small' | 'medium' | 'large' }) => {
    const sizeClasses = {
      small: 'w-1 h-1 sm:w-2 sm:h-2',
      medium: 'w-2 h-2 sm:w-3 sm:h-3',
      large: 'w-3 h-3 sm:w-4 sm:h-4'
    };

    return (
      <div 
        className={`absolute ${sizeClasses[size]} bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    );
  };

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/sasikumar-m',
      color: 'hover:text-gray-300',
      bg: 'hover:bg-gray-300/10'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/sasikumar-m',
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-400/10'
    },
    {
      icon: Instagram ,
      url: 'https://www.instagram.com/_sasi._23?igsh=MWMzNDZwMHFza2Z4Nw==',
      color: 'hover:text-pink-400',
      bg: 'hover:bg-purple-400/10'
    }
  ];

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Enhanced Interactive Background */}
      <div 
        className="absolute inset-0 opacity-30 hidden sm:block transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)`
        }}
      />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10' 
            : 'bg-gradient-to-r from-blue-200/30 to-cyan-200/30'
        }`}></div>
        <div className={`absolute top-3/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' 
            : 'bg-gradient-to-r from-purple-200/30 to-pink-200/30'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/2 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-3xl animate-pulse delay-2000 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10' 
            : 'bg-gradient-to-r from-cyan-200/30 to-blue-200/30'
        }`}></div>
        
        {/* Enhanced Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} size={i % 3 === 0 ? 'large' : i % 2 === 0 ? 'medium' : 'small'} />
        ))}
      </div>

      {/* Enhanced Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-10 h-10 sm:w-20 sm:h-20 border-2 rotate-45 animate-spin ${
          isDarkMode ? 'border-blue-500/20' : 'border-blue-400/30'
        }`} style={{ animationDuration: '20s' }}></div>
        <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-8 h-8 sm:w-16 sm:h-16 border-2 rotate-12 animate-bounce ${
          isDarkMode ? 'border-purple-500/20' : 'border-purple-400/30'
        }`}></div>
        <div className={`absolute top-1/2 right-10 sm:right-20 w-6 h-6 sm:w-12 sm:h-12 rounded-full animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' 
            : 'bg-gradient-to-r from-cyan-300/40 to-blue-300/40'
        }`}></div>
        <Star className={`absolute top-1/3 left-10 sm:left-20 w-4 h-4 sm:w-6 sm:h-6 animate-pulse ${
          isDarkMode ? 'text-yellow-400/30' : 'text-yellow-500/40'
        }`} />
        <Star className={`absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-5 sm:h-5 animate-pulse delay-1000 ${
          isDarkMode ? 'text-pink-400/30' : 'text-pink-500/40'
        }`} />
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Enhanced Animated Name */}
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse leading-tight">
              SasiKumar M
            </h1>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-spin" style={{ animationDuration: '3s' }}>
              <Sparkles className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 animate-bounce delay-500">
              <Star className="text-pink-400 w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
          
          {/* Enhanced Dynamic Typing Effect */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl h-12 sm:h-16 flex items-center justify-center px-4">
            <span className="relative text-center">
              <span className={`bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ${
                isDarkMode ? '' : 'drop-shadow-sm'
              }`}>
                {displayText}
              </span>
              <span className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 animate-pulse"></span>
            </span>
          </div>

          {/* Enhanced Tagline */}
          <div className="relative px-4">
            <p className={`text-base sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              I build fast, modern web apps with React, and powerful backend logic with Python.
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <button
              onClick={scrollToProjects}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>View Projects</span>
                <ChevronDown size={18} className="group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button id="downloadBtn" className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 rounded-full font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover:shadow-lg ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <Download size={15} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Download size={20} className="mr-2"  />
                
                <link />
              </span>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-8 px-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 sm:p-4 transition-all duration-300 transform hover:scale-110 rounded-full group shadow-lg hover:shadow-xl ${
                  isDarkMode 
                    ? `text-gray-400 ${social.color} ${social.bg}` 
                    : `text-gray-600 ${social.color} ${social.bg}`
                }`}
              >
                <social.icon size={24} className="sm:w-8 sm:h-8" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current transition-all duration-300 scale-110 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className={`w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center ${
          isDarkMode ? 'border-gray-400' : 'border-gray-500'
        }`}>
          <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
        <ChevronDown size={20} className={`mt-2 sm:w-6 sm:h-6 animate-pulse ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`} />
      </div>
    </section>
  );
};

export default Hero;