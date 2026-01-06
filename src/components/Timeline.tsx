import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  startMonth: number;
  endMonth: number;
  deliverables?: Array<{ code: string; month: number }>;
  notes?: string;
}

interface WorkPackage {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

const Timeline: React.FC = () => {
  const workPackages: WorkPackage[] = [
    {
      id: 'Phase 1',
      title: 'Literature Review & Data Preparation',
      color: 'from-purple-400 to-purple-500',
      tasks: [
        {
          id: 'T1.1',
          title: 'Literature Review & State-of-the-art Analysis',
          startMonth: 1,
          endMonth: 3,
          deliverables: [{ code: 'D1', month: 3 }]
        },
        {
          id: 'T1.2',
          title: 'Dataset Collection & Preprocessing',
          startMonth: 2,
          endMonth: 5,
          deliverables: [{ code: 'D2', month: 5 }]
        }
      ]
    },
    {
      id: 'Phase 2',
      title: 'Architecture Design & Development',
      color: 'from-orange-400 to-orange-500',
      tasks: [
        {
          id: 'T2.1',
          title: 'Novel Architecture Design & Prototyping',
          startMonth: 4,
          endMonth: 7,
          deliverables: [{ code: 'D3', month: 7 }]
        },
        {
          id: 'T2.2',
          title: 'Multimodal Training Framework Implementation',
          startMonth: 6,
          endMonth: 10,
          deliverables: [{ code: 'D4', month: 10 }]
        },
        {
          id: 'T2.3',
          title: 'Cross-Modal Alignment Mechanism',
          startMonth: 8,
          endMonth: 12,
          deliverables: [{ code: 'D5', month: 12 }]
        }
      ]
    },
    {
      id: 'Phase 3',
      title: 'Model Fine-Tuning & Optimization',
      color: 'from-pink-400 to-pink-500',
      tasks: [
        {
          id: 'T3.1',
          title: 'Supervised Fine-Tuning on Visual Tasks',
          startMonth: 11,
          endMonth: 14,
          deliverables: [{ code: 'D6', month: 14 }]
        },
        {
          id: 'T3.2',
          title: 'Supervised Fine-Tuning on Audio/Speech Tasks',
          startMonth: 11,
          endMonth: 14,
          deliverables: [{ code: 'D7', month: 14 }]
        },
        {
          id: 'T3.3',
          title: 'Model Optimization & Hyperparameter Tuning',
          startMonth: 13,
          endMonth: 16,
          deliverables: [{ code: 'D8', month: 16 }]
        }
      ]
    },
    {
      id: 'Phase 4',
      title: 'Neural Decoding & Validation',
      color: 'from-blue-400 to-blue-500',
      tasks: [
        {
          id: 'T4.1',
          title: 'Neural Representation Learning',
          startMonth: 15,
          endMonth: 18,
          deliverables: [{ code: 'D9', month: 18 }],
          notes: 'MIP Lab'
        },
        {
          id: 'T4.2',
          title: 'Brain Signal Decoding Implementation',
          startMonth: 17,
          endMonth: 21,
          deliverables: [{ code: 'D10', month: 21 }],
          notes: 'NoCE Lab'
        },
        {
          id: 'T4.3',
          title: 'Validation & Performance Evaluation',
          startMonth: 20,
          endMonth: 24,
          deliverables: [{ code: 'D11', month: 24 }]
        }
      ]
    }
  ];

  const milestones = [
    { id: 'M1', month: 7, title: 'M1: Architecture Design Complete' },
    { id: 'M2', month: 14, title: 'M2: Model Fine-Tuning Complete' },
    { id: 'M3', month: 21, title: 'M3: Neural Decoding Validated' }
  ];

  const months = Array.from({ length: 24 }, (_, i) => i + 1);

  const getItemPosition = (startMonth: number, endMonth: number) => {
    const start = ((startMonth - 1) / 24) * 100;
    const width = ((endMonth - startMonth + 1) / 24) * 100;
    return { left: `${start}%`, width: `${width}%` };
  };

  const getDeliverablePosition = (month: number) => {
    const left = ((month - 0.5) / 24) * 100;
    return { left: `${left}%` };
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive 24-month technical roadmap for the CASPER project, from literature review to neural decoding validation
          </p>
        </div>

        {/* Key Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Project Duration</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">24 Months</p>
              <p className="text-sm text-gray-600">
                From literature review and data preparation to neural decoding validation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Technical Phases</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">4 Phases</p>
              <p className="text-sm text-gray-600">
                Structured research phases covering all aspects from design to validation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Key Milestones</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">3 Major</p>
              <p className="text-sm text-gray-600">
                Critical checkpoints ensuring project progress and quality deliverables
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Phase Descriptions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">Phase 1</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Literature review</li>
                <li>• State-of-the-art analysis</li>
                <li>• Dataset collection</li>
                <li>• Data preprocessing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">Phase 2</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Novel architecture design</li>
                <li>• Multimodal training framework</li>
                <li>• Cross-modal alignment</li>
                <li>• Integration of GNN & LLM</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">Phase 3</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Visual task fine-tuning</li>
                <li>• Audio/speech processing</li>
                <li>• Model optimization</li>
                <li>• Hyperparameter tuning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">Phase 4</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Neural representation learning</li>
                <li>• Brain signal decoding</li>
                <li>• Lab validation (MIP & NoCE)</li>
                <li>• Performance evaluation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
