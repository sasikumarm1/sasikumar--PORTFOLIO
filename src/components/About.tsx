import React, { useEffect, useRef, useState } from 'react';
import { Code, Database,  Globe } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traits = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building modern user interfaces with React and responsive design',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend Expertise',
      description: 'Python, SQL, and database management',
      color: 'from-purple-500 to-pink-500'
    },
   
    {
      icon: Globe,
      title: 'Full Stack Skills',
      description: 'End-to-end development with modern technologies',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative group">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden border border-blue-500/20">
                  <div className="text-6xl sm:text-7xl lg:text-8xl transition-transform duration-500 group-hover:scale-110">👨‍💻</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative pl-6">
                  I'm a detail-oriented developer specializing in frontend development with React 
                  and Python for backend. I also have experience building interactive dashboards.
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                </p>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed relative pl-6">
                  Passionate about continuous learning and real-world problem solving, I enjoy creating efficient 
                  solutions that bridge the gap between complex backend logic and intuitive user interfaces.
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-500 rounded-full"></div>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait, index) => (
                  <span
                    key={trait}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 hover:scale-105 cursor-default ${
                      index === 0 ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' :
                      index === 1 ? 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30' :
                      index === 2 ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30' :
                      'bg-pink-500/20 text-pink-400 hover:bg-pink-500/30'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {traits.map((trait, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700 transition-all duration-500 hover:scale-105 hover:bg-gray-800/70 hover:border-blue-500/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className={`relative mx-auto mb-3 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${trait.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <trait.icon size={20} className="text-white sm:w-8 sm:h-8" />
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {trait.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;