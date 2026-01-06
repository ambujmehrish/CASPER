import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Impact: React.FC = () => {
  const impactAreas = [
    {
      title: "Scientific Impact",
      icon: "🔬",
      impacts: [
        "Advance understanding of neural mechanisms underlying cognitive flexibility",
        "Develop novel computational models bridging neuroscience and AI",
        "Create new methodologies for analyzing brain-behavior relationships",
        "Contribute to theoretical frameworks in cognitive neuroscience",
        "Generate high-impact publications in top-tier journals"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Societal Impact",
      icon: "🌍",
      impacts: [
        "Improve diagnostic tools for neurological and psychiatric disorders",
        "Enhance educational strategies for cognitive skill development",
        "Inform policy decisions on mental health and cognitive wellness",
        "Promote public understanding of brain function and plasticity",
        "Support evidence-based interventions for cognitive enhancement"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Economic Impact",
      icon: "💼",
      impacts: [
        "Create intellectual property and potential licensing opportunities",
        "Foster innovation in neurotechnology and AI industries",
        "Reduce healthcare costs through improved diagnostic methods",
        "Generate employment opportunities in research and development",
        "Attract investment in European neuroscience research initiatives"
      ],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const longTermGoals = [
    {
      title: "Research Excellence",
      description: "Establish new standards for interdisciplinary research combining neuroscience, psychology, and artificial intelligence."
    },
    {
      title: "Knowledge Translation",
      description: "Bridge the gap between basic research findings and practical applications in healthcare and education."
    },
    {
      title: "Capacity Building",
      description: "Train the next generation of researchers in cutting-edge methodologies and interdisciplinary approaches."
    },
    {
      title: "Global Collaboration",
      description: "Foster international partnerships and knowledge exchange in cognitive neuroscience research."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CASPER aims to generate significant scientific, societal, and economic impacts 
            through groundbreaking research in cognitive neuroscience and artificial intelligence
          </p>
        </div>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={cn(
                  "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center text-2xl mx-auto mb-4",
                  area.color
                )}>
                  <span className="text-white">{area.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {area.impacts.map((impact, impactIndex) => (
                    <li key={impactIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{impact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Long-term Goals */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Long-term Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {longTermGoals.map((goal, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {goal.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Expected Outcomes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Publications</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-700">Collaborations</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
              <div className="text-gray-700">Patents</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-800 mb-2">10+</div>
              <div className="text-gray-700">Conferences</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;