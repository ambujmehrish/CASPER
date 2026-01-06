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
            CASPER is an MSCA research project advancing multimodal AI by aligning heterogeneous modalities—including neural signals—with language-centric models. The project combines graph-structured fusion, scalable training, and rigorous evaluation to deliver more grounded multimodal understanding and practical neural-to-speech reconstruction pipelines.
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
                  Learn shared semantic spaces across text, image, audio/speech, and video with explicit cross-modal alignment objectives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Improve grounding and robustness of multimodal generation and reasoning via graph-structured representations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enable neural decoding of speech/audio (and related percepts) from EEG/MEG/fMRI with strong generalization and uncertainty awareness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Release reproducible artifacts (code, models, evaluation protocols) aligned with open science practices
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
                  Graph-based multimodal fusion: hierarchical aggregation and concept-level representations using GNNs
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Alignment + supervised fine-tuning: cross-modal contrastive/objective design + task-specific adaptation on curated multimodal datasets
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Neural foundation modeling: unified encoders for EEG/MEG/fMRI with cross-subject/session normalization and efficient decoding heads
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Evaluation & reliability: benchmarking for factual/semantic grounding, robustness across domains, and neural reconstruction fidelity
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
                Advancing grounded multimodal AI by combining graph neural networks with multimodal LLMs for more reliable semantic reasoning across text, vision, and audio.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🧠</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Neuroscience</h4>
              <p className="text-gray-600 text-sm">
                Building unified representations for EEG/MEG/fMRI and aligning them with multimodal semantics to enable robust decoding and reconstruction of speech/audio from brain activity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Research Impact</h4>
              <p className="text-gray-600 text-sm">
                Delivering reproducible models, benchmarks, and open-science resources that support trustworthy multimodal systems and accelerate translation to speech-related applications.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium">
            <span className="mr-2">🎯</span>
            Advancing multimodal AI through graph-structured fusion and neural decoding
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;