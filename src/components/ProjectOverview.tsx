import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ProjectOverview: React.FC = () => {
  return (
    <section id="overview" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CASPER represents a groundbreaking approach to understanding consciousness through 
            the convergence of artificial intelligence and neuroscience research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Research Goals
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Develop novel computational models of consciousness based on neuroscientific principles
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Bridge the gap between theoretical consciousness studies and practical AI applications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Create interpretable AI systems that can explain their decision-making processes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advance our understanding of consciousness through computational modeling
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Methodology
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interdisciplinary approach combining neuroscience, AI, and cognitive science
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Development of biologically-inspired neural network architectures
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integration of attention mechanisms and global workspace theory
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Empirical validation through behavioral and neuroimaging studies
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Innovation & Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Artificial Intelligence</h4>
              <p className="text-gray-600 text-sm">
                Advancing AI systems with consciousness-inspired architectures for better interpretability and human-like reasoning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Neuroscience</h4>
              <p className="text-gray-600 text-sm">
                Contributing to our understanding of consciousness through computational models and empirical research.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Research Impact</h4>
              <p className="text-gray-600 text-sm">
                Fostering interdisciplinary collaboration and training the next generation of consciousness researchers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium">
            <span className="mr-2">🎯</span>
            Bridging the gap between mind and machine through rigorous scientific research
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;