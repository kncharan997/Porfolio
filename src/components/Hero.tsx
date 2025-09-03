import React from 'react';
import { Mail, Phone, Linkedin, Github, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Charan K N
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Associate Software Engineer
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in .NET technologies, 
              crafting scalable solutions and delivering exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up-delay">
            <a
              href="tel:+919980727790"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              +91-9980727790
            </a>
            <a
              href="mailto:kncharan997@gmail.com"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail size={18} />
              kncharan997@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/charan-k-n/"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/kncharan997"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button
              onClick={scrollToNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;