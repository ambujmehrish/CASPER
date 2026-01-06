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
      id: 'WP1',
      title: 'WP1: Management & Monitoring',
      color: 'from-green-400 to-green-500',
      tasks: [
        {
          id: 'T1.1',
          title: 'T1.1: Data and Financial management & CDP',
          startMonth: 1,
          endMonth: 6,
          deliverables: [
            { code: 'CDP', month: 1 },
            { code: 'DMP', month: 6 }
          ]
        },
        {
          id: 'T1.2',
          title: 'T1.2: Planning and Monitoring',
          startMonth: 6,
          endMonth: 24,
          deliverables: [
            { code: 'D1.1', month: 6 },
            { code: 'D1.2', month: 12 },
            { code: 'D1.3', month: 24 }
          ]
        }
      ]
    },
    {
      id: 'WP2',
      title: 'WP2: Architecture & Training',
      color: 'from-orange-400 to-orange-500',
      tasks: [
        {
          id: 'T2.1',
          title: 'T2.1: Architecture Design',
          startMonth: 4,
          endMonth: 5,
          deliverables: [{ code: 'D2.1', month: 5 }]
        },
        {
          id: 'T2.2',
          title: 'T2.2: Multimodal Training',
          startMonth: 8,
          endMonth: 13,
          deliverables: [{ code: 'D2.2', month: 13 }]
        }
      ]
    },
    {
      id: 'WP3',
      title: 'WP3: Supervised Fine-Tuning',
      color: 'from-pink-400 to-pink-500',
      tasks: [
        {
          id: 'T3.1',
          title: 'T3.1: Supervised Fine-Tuning on Visual Tasks',
          startMonth: 13,
          endMonth: 16,
          deliverables: [{ code: 'D3.1', month: 16 }]
        },
        {
          id: 'T3.2',
          title: 'T3.2: Supervised Fine-Tuning on Audio/Speech Tasks',
          startMonth: 13,
          endMonth: 16,
          deliverables: [{ code: 'D3.2', month: 16 }]
        }
      ]
    },
    {
      id: 'WP4',
      title: 'WP4: Neural Representation',
      color: 'from-blue-400 to-blue-500',
      tasks: [
        {
          id: 'T4.1',
          title: 'T4.1: Neural Representation Learning and Decoding',
          startMonth: 16,
          endMonth: 24,
          deliverables: [{ code: 'D4.1', month: 24 }],
          notes: 'MIP Lab → NoCE Lab'
        }
      ]
    },
    {
      id: 'WP5',
      title: 'WP5: Dissemination & Exploitation',
      color: 'from-yellow-400 to-yellow-500',
      tasks: [
        {
          id: 'T6.1',
          title: 'T6.1: Dissemination, Exploitation & Comm',
          startMonth: 6,
          endMonth: 24,
          deliverables: [
            { code: 'D5.1', month: 6 },
            { code: 'D5.2', month: 12 },
            { code: 'D5.3', month: 23 },
            { code: 'D5.4', month: 24 }
          ]
        }
      ]
    }
  ];

  const milestones = [
    { id: 'M1', month: 10, title: 'M1: Architecture & Training Complete' },
    { id: 'M2', month: 14, title: 'M2: Fine-Tuning Complete' },
    { id: 'M3', month: 23, title: 'M3: Final Evaluation' }
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
            A comprehensive 24-month roadmap outlining key work packages, milestones, and deliverables for the CASPER project
          </p>
        </div>

        <Card className="mb-8 overflow-x-auto">
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900">Timeline Overview</h3>
          </CardHeader>
          <CardContent>
            <div className="min-w-[800px]">
              {/* Timeline Header - Months */}
              <div className="mb-2">
                <div className="grid grid-cols-24 gap-0.5 mb-1 ml-48">
                  {months.map((month) => (
                    <div
                      key={month}
                      className="text-xs text-center text-gray-600 font-medium border-r border-gray-200"
                    >
                      {month}
                    </div>
                  ))}
                </div>

                {/* Quarters */}
                <div className="grid grid-cols-8 gap-0 mb-4 ml-48">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="text-sm text-center font-semibold text-gray-700 py-1 border-r border-gray-300 last:border-r-0"
                    >
                      {i < 4 ? `Y1 Q${i + 1}` : `Y2 Q${i - 3}`}
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Packages */}
              <div className="space-y-1">
                {workPackages.map((wp) => (
                  <div key={wp.id} className="border-b border-gray-200 pb-1">
                    {wp.tasks.map((task, taskIndex) => (
                      <div key={task.id} className="flex items-center mb-1 min-h-[40px]">
                        {/* WP Label (only show for first task) */}
                        {taskIndex === 0 && (
                          <div className="w-16 flex-shrink-0">
                            <span className={cn(
                              "inline-block px-2 py-1 rounded text-xs font-bold text-white",
                              `bg-gradient-to-r ${wp.color}`
                            )}>
                              {wp.id}
                            </span>
                          </div>
                        )}
                        {taskIndex !== 0 && <div className="w-16 flex-shrink-0"></div>}

                        {/* Task Label */}
                        <div className="w-32 flex-shrink-0 px-2">
                          <span className="text-xs font-medium text-gray-700">
                            {task.title}
                          </span>
                        </div>

                        {/* Timeline Bar */}
                        <div className="flex-1 relative h-8 bg-gray-100 rounded">
                          <div
                            className={cn(
                              "absolute top-1 bottom-1 rounded flex items-center justify-center",
                              `bg-gradient-to-r ${wp.color}`,
                              "border border-white shadow-sm"
                            )}
                            style={getItemPosition(task.startMonth, task.endMonth)}
                          >
                            {task.notes && (
                              <span className="text-[10px] font-medium text-white px-1">
                                {task.notes}
                              </span>
                            )}
                          </div>

                          {/* Deliverables */}
                          {task.deliverables?.map((del) => (
                            <div
                              key={del.code}
                              className="absolute top-0 bottom-0 flex items-center"
                              style={getDeliverablePosition(del.month)}
                            >
                              <div className="bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md whitespace-nowrap">
                                {del.code}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Milestones Row */}
                <div className="flex items-center mt-4 min-h-[40px]">
                  <div className="w-48 flex-shrink-0 px-2">
                    <span className="text-xs font-bold text-gray-900">
                      Milestones
                    </span>
                  </div>
                  <div className="flex-1 relative h-8">
                    {milestones.map((milestone) => (
                      <div
                        key={milestone.id}
                        className="absolute top-0 bottom-0 flex items-center"
                        style={getDeliverablePosition(milestone.month)}
                      >
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap">
                          {milestone.id}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Project Duration</h3>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600 mb-2">24 Months</p>
              <p className="text-sm text-gray-600">
                Comprehensive research and development cycle from architecture design to neural decoding
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
                Structured work packages covering management, architecture, training, fine-tuning, and dissemination
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

        {/* Detailed Work Package Descriptions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">WP1: Management</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Data & financial management</li>
                <li>• Career development plan (CDP)</li>
                <li>• Data management plan (DMP)</li>
                <li>• Continuous monitoring & reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">WP2: Architecture</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Novel architecture design</li>
                <li>• Multimodal training framework</li>
                <li>• Integration of GNN & LLM</li>
                <li>• Cross-modal alignment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">WP3: Fine-Tuning</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Visual task optimization</li>
                <li>• Audio/speech processing</li>
                <li>• Supervised learning methods</li>
                <li>• Performance evaluation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">WP4: Neural Decoding</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Neural representation learning</li>
                <li>• Brain signal decoding</li>
                <li>• Collaboration with MIP Lab</li>
                <li>• Validation at NoCE Lab</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                <h3 className="text-lg font-semibold text-gray-900">WP5: Dissemination</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Scientific publications</li>
                <li>• Conference presentations</li>
                <li>• Knowledge exploitation</li>
                <li>• Community engagement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <h3 className="text-lg font-semibold text-gray-900">Milestones</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• M1 (Month 10): Training complete</li>
                <li>• M2 (Month 14): Fine-tuning done</li>
                <li>• M3 (Month 23): Final evaluation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
