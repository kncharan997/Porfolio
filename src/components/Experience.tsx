import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Tech Mahindra',
      location: 'Bangalore',
      period: 'Sept 2024 – Present',
      department: 'L3 Backend Support - ASP.NET Core',
      achievements: [
        'Supported Drona, a Manufacturing Execution System (MES) for Mahindra and Mahindra Ltd., focusing on backend stability and performance improvements',
        'Effectively diagnosed and resolved production issues including API failures, database errors, and integration challenges',
        'Coordinated closely with development and product teams to escalate critical bugs and deploy fixes and hotfixes',
        'Conducted root cause analysis, backend debugging, and continuous system monitoring to minimize downtime',
        'Maintained clear documentation of troubleshooting steps and resolutions to enhance team knowledge'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Building robust solutions and supporting critical enterprise systems
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {exp.department}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <p className="text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
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

export default Experience;