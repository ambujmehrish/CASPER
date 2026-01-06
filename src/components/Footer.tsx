import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">CASPER Project</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing AI-driven neuroscience research through innovative computational approaches and interdisciplinary collaboration.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span className="font-semibold">Project ID:</span>
              <span>MSCA-PF-2023-101234567</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Principal Investigator</p>
                  <a href="mailto:casper@university.edu" className="text-blue-300 hover:text-blue-200 transition-colors">
                    casper@university.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Department of Neuroscience</p>
                  <p>University Research Institute</p>
                  <p>European Union</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Quick Links</h3>
            <div className="space-y-2">
              <a href="#overview" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                Project Overview
              </a>
              <a href="#objectives" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                Objectives
              </a>
              <a href="#team" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                Research Team
              </a>
              <a href="#publications" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                Publications
              </a>
              <a href="#impact" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors">
                Impact & Outcomes
              </a>
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-200">Resources</h3>
            <div className="space-y-2">
              <a 
                href="https://marie-sklodowska-curie-actions.ec.europa.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors"
              >
                <span>Marie Curie Actions</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://cordis.europa.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors"
              >
                <span>CORDIS Database</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://ec.europa.eu/research/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors"
              >
                <span>EU Research</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-300 transition-colors"
              >
                <span>Open Data Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Funding Acknowledgment */}
        <Card className="mt-12 bg-white/10 border-white/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-sm">EU</div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-200 text-lg">Funding Acknowledgment</h4>
                  <p className="text-gray-300 text-sm">
                    This project has received funding from the European Union's Horizon Europe research and innovation programme
                  </p>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-blue-300 font-semibold">Marie Skłodowska-Curie Actions</p>
                <p className="text-gray-300 text-sm">Postdoctoral Fellowship</p>
                <p className="text-gray-400 text-xs">Grant Agreement No. 101234567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 CASPER Project. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;