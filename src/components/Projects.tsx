import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, Database, Cpu, Layout, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Agricultural Worker Allocation Portal',
      category: 'Python Backend',
      description: 'Final year project for managing agricultural worker tasks using a custom-built portal with efficient task allocation and management system.',
      tech: ['Python', 'HTML/CSS', 'JavaScript', 'SQL'],
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { users: '500+', efficiency: '85%' }
    },
    {
      title: 'IoT Line Follower car',
      category: 'IoT Project',
      description: 'A robotics project with autonomous navigation using IR sensors and Arduino programming for precise line following.',
      tech: ['Arduino', 'Embedded C', 'IR Sensors', 'C++'],
      icon: Cpu,
      color: 'from-violet-500 to-purple-500',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { accuracy: '95%', speed: '2m/s' }
    },
    {
      title: 'Admin Dashboard',
      category: 'Frontend',
      description: 'Modern admin dashboard built with React and Tailwind CSS featuring responsive design and interactive components.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      icon: Layout,
      color: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { components: '50+', responsive: '100%' }
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'This responsive portfolio website showcasing modern design principles and smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Code,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { performance: '98%', accessibility: '100%' }
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-violet-500/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A showcase of my work spanning Python backend development and modern frontend applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:scale-105 hover:bg-gray-900/70 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full">
                    <project.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center space-y-3 sm:space-y-4">
                      <Eye size={32} className="text-white mx-auto animate-pulse sm:w-12 sm:h-12" />
                      <p className="text-white font-semibold text-sm sm:text-base">View Project Details</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-1.5 sm:p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 group">
                        <Github size={14} className="text-gray-400 group-hover:text-white sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1.5 sm:p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 group">
                        <ExternalLink size={14} className="text-gray-400 group-hover:text-white sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Project Stats */}
                  <div className="flex justify-between items-center mb-3 sm:mb-4 text-xs">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-emerald-400 font-bold text-sm">{value}</div>
                        <div className="text-gray-500 capitalize text-xs">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/50 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;