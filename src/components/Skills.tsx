import React, { useEffect, useRef, useState } from 'react';
import { Brain, Monitor, Server, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                  }));
                }, Math.random() * 1000);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'javacript', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Tools & Other',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        // { name: 'Arduino', level: 85 },
        { name: 'Visual Studio', level: 80 },
        { name: 'Git', level: 75 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute top-1/3 right-0 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              My technical proficiency spans across multiple domains, from frontend development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 transition-all duration-500 hover:bg-gray-800/70 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`relative p-2 sm:p-3 rounded-full bg-gradient-to-r ${category.color} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} className="text-white sm:w-6 sm:h-6" />
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-gray-400 text-xs sm:text-sm font-mono">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div
                          className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-2000 ease-out relative`}
                          style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Skills */}
          <div className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {[
                'Canvas', 'Figma',  'Embedded C', 
                'JSON', 'Bootstrap' , 'tailwindcss', 'visual studio code'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="relative px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-default group"
                  style={{ animationDelay: `${index * 100 + 1000}ms` }}
                >
                  {tech}
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-emerald-500/50 transition-all duration-300"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;