import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Detail-oriented Associate Software Engineer with experience in backend development and expertise in Java Spring Framework. Excel at analyzing system requirements, debugging complex issues, and delivering scalable, maintainable software solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
               Strong collaborator with excellent communication skills and passion for continuous learning. Currently building innovative Java backend solutions at Tech Mahindra using Spring Framework.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Problem Solver</h3>
                  <p className="text-gray-600">Good in diagnosing and resolving production issues with systematic approach</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Users className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Team Player</h3>
                  <p className="text-gray-600">Strong collaboration skills with development and product teams</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Lightbulb className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Continuous Learner</h3>
                  <p className="text-gray-600">Passionate about staying current with latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;