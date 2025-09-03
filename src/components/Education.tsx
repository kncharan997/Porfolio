import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Science and Engineering',
      institution: 'CMR Institute of Technology',
      location: 'Bengaluru',
      period: '2020 – 2024',
      grade: 'CGPA: 8.17',
      type: 'graduation'
    },
    {
      degree: 'Pre-University Course (PCMB)',
      institution: 'S R PU College',
      location: 'Hebri, Karnataka',
      period: '2018 – 2020',
      grade: 'Percentage: 85.66',
      type: 'intermediate'
    },
    {
      degree: 'SSLC',
      institution: 'Poornaprajna High School',
      location: 'Sangameshwarapet, Chikkamagaluru, Karnataka',
      period: '2017 – 2018',
      grade: 'Percentage: 88.80',
      type: 'secondary'
    }
  ];

  const getGradientColor = (type: string) => {
    const gradients = {
      graduation: 'from-blue-600 to-purple-600',
      intermediate: 'from-teal-600 to-blue-600',
      secondary: 'from-green-600 to-teal-600'
    };
    return gradients[type as keyof typeof gradients] || 'from-blue-600 to-purple-600';
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Strong academic foundation in computer science and engineering
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${getGradientColor(edu.type)}`}></div>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getGradientColor(edu.type)}`}>
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 mb-2">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:text-right">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-gray-600 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Award size={16} className="text-green-500" />
                        <span className="text-green-600 font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
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