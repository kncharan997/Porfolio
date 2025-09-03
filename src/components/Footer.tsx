import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Charan K N</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Associate Software Engineer passionate about creating innovative solutions 
              and building scalable applications with modern technologies.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2025 Charan K N. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;