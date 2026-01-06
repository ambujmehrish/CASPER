import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Target, Brain, Zap } from "lucide-react";

const Objectives: React.FC = () => {
  const objectives = [
    {
      id: "SO1",
      title: "Multi-Modal Representation Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Develop a human-like multimodal agent that learns unified, graph-structured representations across text, image, audio/speech, and video for robust semantic understanding and generation.",
      details: [
        "Build concept-level graphs from grid/patch and token features",
        "Learn aligned multimodal embeddings with contrastive and structured objectives",
        "Evaluate grounding, compositionality, and robustness across modalities",
        "Release reusable representation and evaluation components"
      ]
    },
    {
      id: "SO2",
      title: "Supervised Fine-Tuning & Optimization",
      icon: <Zap className="w-8 h-8" />,
      description: "Refine and optimize the multimodal agent through supervised fine-tuning on curated multimodal datasets, improving reliability, generalization, and controllability.",
      details: [
        "Curate training mixtures and task formulations across modalities",
        "Fine-tune with quality/robustness targets and safety-aware evaluation",
        "Improve efficiency via parameter-efficient adaptation and scalable training",
        "Establish benchmarking protocols for generalization and failure modes"
      ]
    },
    {
      id: "SO3",
      title: "Neural Representation Learning & Decoding (EEG/MEG/fMRI)",
      icon: <Target className="w-8 h-8" />,
      description: "Develop unified neural encoders and decoding pipelines that map brain activity to aligned multimodal semantics, enabling neural-to-speech/audio reconstruction with strong cross-subject transfer.",
      details: [
        "Build modality-agnostic encoders for EEG/MEG/fMRI time series",
        "Align neural embeddings with multimodal semantic spaces (text/audio/image)",
        "Develop efficient decoders for speech/audio reconstruction and evaluation",
        "Validate generalization across subjects, sessions, and datasets"
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
            in multimodal AI, graph-structured fusion, and neural decoding
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
              These objectives work synergistically to advance multimodal AI systems,
              from unified representation learning to neural decoding pipelines that bridge brain activity and speech/audio reconstruction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;