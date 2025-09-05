import React from 'react';
import { Github, Database, Monitor, Server } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Blood Bank Management System',
      period: 'Feb 2025 - May 2025',
      description: 'A comprehensive full-stack web application designed for administrative users to efficiently manage donors, blood inventory, and hospital details with automated processes and secure access controls.',
      technologies: ['ASP.NET Core', 'HTML', 'CSS', 'JavaScript', 'Entity Framework'],
      features: [
        'Modular backend architecture with ASP.NET Core Web APIs',
        'Intuitive UI with mobile responsiveness and accessibility',
        'Advanced search and filter functionality by blood group and donor name',
        'Automated cleanup of expired inventory with validation logic'
      ],
      icon: <Database className="text-red-600" size={24} />
    }
  ];

  const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'ASP.NET Core': 'bg-purple-100 text-purple-800',
      'React.js': 'bg-blue-100 text-blue-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'Entity Framework': 'bg-green-100 text-green-800'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Showcase of innovative solutions and technical expertise
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-gray-500 font-medium">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Monitor size={18} />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Server size={18} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    {/* <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                      <ExternalLink size={18} />
                      View Project
                    </button> */}
                    <a href="https://github.com/kncharan997/BloodBank_Management_System" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                        <Github size={18} />
                         Source Code
                        </button>
                    </a>

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

export default Projects;