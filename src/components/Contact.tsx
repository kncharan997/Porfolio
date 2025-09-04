import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github} from 'lucide-react';
import profilePic from './images/profilePic.jpeg';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: 'Email',
      value: 'kncharan997@gmail.com',
      href: 'mailto:kncharan997@gmail.com'
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      label: 'Phone',
      value: '+91-9980727790',
      href: 'tel:+919980727790'
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/charan-k-n/'
    },
    {
      icon: <Github className="text-gray-800" size={24} />,
      label: 'GitHub',
      href: 'https://github.com/kncharan997'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and innovative projects
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-center">
            {/* Profile Picture */}
            <div className="flex justify-center mb-12 lg:mb-0">
            <img
                src={profilePic}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-600"
            />
            </div>

            {/* Contact Information and Social Links */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
