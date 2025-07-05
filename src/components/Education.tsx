import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Sc. Computer Technology',
      institution: 'KG College of Arts and Science',
      duration: '2022 - 2025',
      status: 'Completed',
      color: 'from-emerald-500 to-teal-500',
      description: 'Comprehensive computer science program covering programming, database management, and software development'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Higher Secondary School',
      duration: '2020 - 2022',
      status: 'Completed',
      color: 'from-violet-500 to-purple-500',
      description: 'Science stream with focus on Mathematics and Computer Science'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Government High School',
      duration: '2019 - 2020',
      status: 'Completed',
      color: 'from-orange-500 to-red-500',
      description: 'Foundation studies with excellent academic performance'
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              My educational journey in computer science and technology.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap size={24} className="text-white sm:w-8 sm:h-8" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">{edu.degree}</h3>
                      <span className={`self-start px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        edu.status === 'Pursuing' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-violet-500/20 text-violet-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg text-emerald-400 font-medium mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                      <Calendar size={12} className="mr-2 sm:w-4 sm:h-4" />
                      {edu.duration}
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;