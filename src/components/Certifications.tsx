import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Frontend Development',
      issuer: 'KGISL Micro College',
      date: '2024',
      color: 'from-violet-500 to-purple-500',
      description: 'Modern frontend development with React, JavaScript, and responsive design principles'
    },
    {
      title: 'MongoDB Database',
      issuer: 'MongoDB University',
      date: '2024',
      color: 'from-emerald-500 to-teal-500',
      description: 'NoSQL database management and optimization with MongoDB'
    },
    {
      title: 'HTML Web Designing',
      issuer: 'Bharathiar University',
      date: '2017',
      color: 'from-orange-500 to-red-500',
      description: 'Foundational programming concepts and advanced C programming techniques'
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Continuous learning through industry-recognized certifications and professional development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={24} className="text-white sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-emerald-400 font-medium mb-2 text-sm sm:text-base">{cert.issuer}</p>
                
                <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-3">
                  <Calendar size={12} className="mr-2 sm:w-4 sm:h-4" />
                  {cert.date}
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;