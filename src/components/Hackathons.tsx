import React from 'react';
import { Trophy, Calendar, Users, Award } from 'lucide-react';

const Hackathons: React.FC = () => {
  const hackathons = [
    {
      name: 'Smart India Hackathon',
      year: '2023',
      role: 'Participant',
      color: 'from-emerald-500 to-teal-500',
      description: 'National-level hackathon focusing on innovative solutions for real-world problems',
      achievements: ['Problem-solving skills', 'Team collaboration', 'Technical innovation'],
      logo: '🇮🇳'
    },
    {
      name: 'DeepRacer AWS',
      year: '2024',
      role: 'Participant',
      color: 'from-violet-500 to-purple-500',
      description: 'Amazon Web Services machine learning and autonomous racing competition',
      achievements: ['ML/AI experience', 'AWS cloud services', 'Autonomous systems'],
      logo: '🏎️'
    }
  ];

  return (
    <section id="hackathons" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-violet-500 bg-clip-text text-transparent">
              Participations
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Participating in competitive events to challenge my skills and learn from peers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${hackathon.color} flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Trophy size={24} className="text-white sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">{hackathon.name}</h3>
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <Calendar size={12} className="mr-2 sm:w-4 sm:h-4" />
                      {hackathon.year}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-4xl">{hackathon.logo}</div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs sm:text-sm">
                    <Users size={12} className="mr-1 sm:w-4 sm:h-4" />
                    {hackathon.role}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{hackathon.description}</p>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold flex items-center text-sm sm:text-base">
                    <Award size={14} className="mr-2 sm:w-4 sm:h-4" />
                    Key Learnings
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {hackathon.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                      >
                        {achievement}
                      </span>
                    ))}
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

export default Hackathons;