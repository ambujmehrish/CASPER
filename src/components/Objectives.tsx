import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Target, Brain, Zap } from "lucide-react";

const Objectives: React.FC = () => {
  const objectives = [
    {
      id: "SO1",
      title: "Develop Novel Neuromorphic Architectures",
      icon: <Brain className="w-8 h-8" />,
      description: "Design and implement innovative neuromorphic computing architectures that mimic biological neural networks for enhanced AI processing capabilities.",
      details: [
        "Create bio-inspired neural network topologies",
        "Develop adaptive learning mechanisms",
        "Implement energy-efficient processing units",
        "Design scalable neuromorphic chip architectures"
      ]
    },
    {
      id: "SO2", 
      title: "Optimize AI-Hardware Co-design",
      icon: <Zap className="w-8 h-8" />,
      description: "Establish seamless integration between artificial intelligence algorithms and specialized neuromorphic hardware for maximum performance efficiency.",
      details: [
        "Develop hardware-aware AI algorithms",
        "Create optimization frameworks for co-design",
        "Implement real-time adaptation mechanisms",
        "Design efficient memory architectures"
      ]
    },
    {
      id: "SO3",
      title: "Validate Real-world Applications",
      icon: <Target className="w-8 h-8" />,
      description: "Demonstrate the practical effectiveness of neuromorphic AI systems through comprehensive testing in real-world scenarios and applications.",
      details: [
        "Conduct performance benchmarking studies",
        "Validate energy efficiency improvements",
        "Test scalability in various domains",
        "Measure real-world deployment feasibility"
      ]
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research is structured around three specific objectives that drive innovation 
            in neuromorphic computing and AI-hardware integration
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {objectives.map((objective, index) => (
            <Card 
              key={objective.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                    {objective.icon}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                  {objective.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {objective.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {objective.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                    Key Activities:
                  </h4>
                  <ul className="space-y-2">
                    {objective.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Integrated Approach
            </h3>
            <p className="text-gray-600 max-w-2xl">
              These objectives work synergistically to advance the field of neuromorphic computing, 
              from theoretical foundations to practical implementations that can transform AI processing efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;