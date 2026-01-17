import React from 'react';
import { Code, Database, Monitor, Wrench, Brain, Users } from 'lucide-react';

const Skills: React.FC = () => {
 const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['Java', 'JavaScript'],
      color: 'blue'
    },
    {
      title: 'Backend Technologies',
      icon: <Database className="text-green-600" size={24} />,
      skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security (JWT)', 'REST APIs', 'Apache Kafka'],
      color: 'green'
    },
    {
      title: 'Frontend Technologies',
      icon: <Monitor className="text-teal-600" size={24} />,
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      color: 'teal'
    },
    {
      title: 'Databases & Cloud',
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: ['MySQL', 'MongoDB', 'AWS (EC2, RDS)', 'Docker'],
      color: 'orange'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="text-yellow-600" size={24} />,
      skills: ['Git', 'Maven', 'Postman', 'Swagger', 'Jira', 'CI/CD'],
      color: 'yellow'
    },
    {
      title: 'Core Concepts',
      icon: <Brain className="text-purple-600" size={24} />,
      skills: ['Data Structures & Algorithms', 'OOP', 'Microservices', 'DBMS', 'Agile/Scrum'],
      color: 'purple'
    },
    {
      title: 'Development Skills',
      icon: <Users className="text-pink-600" size={24} />,
      skills: ['REST API Design', 'Authentication & Authorization', 'Database Optimization', 'Debugging', 'Problem Solving'],
      color: 'pink'
    }
];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 hover:border-blue-300',
      teal: 'bg-teal-50 border-teal-200 hover:border-teal-300',
      green: 'bg-green-50 border-green-200 hover:border-green-300',
      orange: 'bg-orange-50 border-orange-200 hover:border-orange-300',
      purple: 'bg-purple-50 border-purple-200 hover:border-purple-300',
      pink: 'bg-pink-50 border-pink-200 hover:border-pink-300'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 border-gray-200';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${getColorClasses(category.color)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;