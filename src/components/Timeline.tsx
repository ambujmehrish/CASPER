import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  type: 'milestone' | 'workpackage';
  startMonth: number;
  endMonth: number;
  description: string;
  deliverables?: string[];
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 'wp1',
      title: 'WP1: Literature Review & Framework Development',
      type: 'workpackage',
      startMonth: 1,
      endMonth: 6,
      description: 'Comprehensive review of existing AI-neuroscience integration approaches and development of theoretical framework',
      deliverables: ['Literature review report', 'Theoretical framework document']
    },
    {
      id: 'm1',
      title: 'M1: Framework Completion',
      type: 'milestone',
      startMonth: 6,
      endMonth: 6,
      description: 'Completion of theoretical framework and literature review'
    },
    {
      id: 'wp2',
      title: 'WP2: Data Collection & Preprocessing',
      type: 'workpackage',
      startMonth: 4,
      endMonth: 10,
      description: 'Collection of neuroimaging data and development of preprocessing pipelines',
      deliverables: ['Preprocessed datasets', 'Data quality reports']
    },
    {
      id: 'wp3',
      title: 'WP3: AI Model Development',
      type: 'workpackage',
      startMonth: 7,
      endMonth: 15,
      description: 'Development and training of novel AI models for neuroscience applications',
      deliverables: ['AI model prototypes', 'Performance evaluation reports']
    },
    {
      id: 'm2',
      title: 'M2: Model Validation',
      type: 'milestone',
      startMonth: 15,
      endMonth: 15,
      description: 'Successful validation of AI models on test datasets'
    },
    {
      id: 'wp4',
      title: 'WP4: Clinical Validation & Testing',
      type: 'workpackage',
      startMonth: 12,
      endMonth: 20,
      description: 'Validation of developed models in clinical settings and real-world scenarios',
      deliverables: ['Clinical validation reports', 'User feedback analysis']
    },
    {
      id: 'wp5',
      title: 'WP5: Dissemination & Publication',
      type: 'workpackage',
      startMonth: 16,
      endMonth: 24,
      description: 'Publication of results and dissemination to scientific community',
      deliverables: ['Peer-reviewed publications', 'Conference presentations']
    },
    {
      id: 'm3',
      title: 'M3: Project Completion',
      type: 'milestone',
      startMonth: 24,
      endMonth: 24,
      description: 'Final project deliverables and comprehensive evaluation'
    }
  ];

  const months = Array.from({ length: 24 }, (_, i) => i + 1);

  const getItemPosition = (startMonth: number, endMonth: number) => {
    const start = ((startMonth - 1) / 24) * 100;
    const width = ((endMonth - startMonth + 1) / 24) * 100;
    return { left: `${start}%`, width: `${width}%` };
  };

  const getQuarter = (month: number) => {
    return Math.ceil(month / 3);
  };

  const getYear = (month: number) => {
    return month <= 12 ? 1 : 2;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive 24-month roadmap outlining key work packages, milestones, and deliverables for the CASPER project
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Timeline Overview</h3>
          </CardHeader>
          <CardContent>
            {/* Timeline Header */}
            <div className="mb-6">
              <div className="grid grid-cols-24 gap-1 mb-2">
                {months.map((month) => (
                  <div
                    key={month}
                    className="text-xs text-center text-gray-500 font-medium"
                  >
                    {month}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-8 gap-1 mb-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="text-sm text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0"
                  >
                    {i < 4 ? `Y1 Q${i + 1}` : `Y2 Q${i - 3}`}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative">
                  <div className="flex items-center mb-2">
                    <div className="w-32 flex-shrink-0">
                      <span
                        className={cn(
                          "inline-block px-2 py-1 rounded-full text-xs font-medium",
                          item.type === 'milestone'
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        )}
                      >
                        {item.type === 'milestone' ? 'Milestone' : 'Work Package'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Bar */}
                  <div className="relative h-8 bg-gray-100 rounded-lg mb-2 ml-32">
                    <div
                      className={cn(
                        "absolute top-1 bottom-1 rounded-md flex items-center justify-center text-xs font-medium text-white",
                        item.type === 'milestone'
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-blue-500 to-blue-600"
                      )}
                      style={getItemPosition(item.startMonth, item.endMonth)}
                    >
                      {item.startMonth === item.endMonth 
                        ? `M${item.startMonth}` 
                        : `M${item.startMonth}-${item.endMonth}`
                      }
                    </div>
                  </div>

                  {/* Deliverables */}
                  {item.deliverables && (
                    <div className="ml-32 text-sm text-gray-600">
                      <span className="font-medium">Deliverables: </span>
                      {item.deliverables.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Project Duration</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">24 Months</p>
              <p className="text-sm text-gray-600">
                Comprehensive research and development cycle from literature review to final dissemination
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Work Packages</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">5 WPs</p>
              <p className="text-sm text-gray-600">
                Structured work packages covering all aspects from research to implementation
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
      </div>
    </section>
  );
};

export default Timeline;