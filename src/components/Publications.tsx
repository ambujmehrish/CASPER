import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Users, Calendar, Award } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  status: 'published' | 'accepted' | 'submitted' | 'in-preparation';
  doi?: string;
  url?: string;
  abstract?: string;
}

interface DisseminationActivity {
  id: string;
  title: string;
  type: 'conference' | 'workshop' | 'seminar' | 'poster' | 'media';
  venue: string;
  date: string;
  location: string;
  presenter: string;
  description: string;
}

const Publications: React.FC = () => {
  const publications: Publication[] = [
    {
      id: '1',
      title: 'Causal Discovery in Neuroimaging: A Comprehensive Survey of Methods and Applications',
      authors: ['Dr. Sarah Chen', 'Prof. Michael Rodriguez', 'Dr. Elena Kowalski'],
      venue: 'Nature Neuroscience',
      year: 2024,
      type: 'journal',
      status: 'submitted',
      abstract: 'This comprehensive survey reviews the current state of causal discovery methods in neuroimaging, highlighting key challenges and future directions.'
    },
    {
      id: '2',
      title: 'Novel Algorithms for Causal Structure Learning in High-Dimensional Neural Data',
      authors: ['Dr. Sarah Chen', 'Dr. James Thompson'],
      venue: 'International Conference on Machine Learning (ICML)',
      year: 2024,
      type: 'conference',
      status: 'accepted',
      doi: '10.1000/example.doi',
      abstract: 'We present novel algorithms that significantly improve causal structure learning performance in high-dimensional neural datasets.'
    },
    {
      id: '3',
      title: 'Bridging Neuroscience and AI: Causal Mechanisms in Neural Networks',
      authors: ['Prof. Michael Rodriguez', 'Dr. Elena Kowalski', 'Dr. Sarah Chen'],
      venue: 'Trends in Cognitive Sciences',
      year: 2024,
      type: 'journal',
      status: 'in-preparation',
      abstract: 'An interdisciplinary perspective on how causal discovery can enhance our understanding of both biological and artificial neural networks.'
    }
  ];

  const disseminationActivities: DisseminationActivity[] = [
    {
      id: '1',
      title: 'CASPER: Revolutionizing Causal Discovery in Neuroscience',
      type: 'conference',
      venue: 'European Conference on Machine Learning (ECML)',
      date: '2024-09-15',
      location: 'Vilnius, Lithuania',
      presenter: 'Dr. Sarah Chen',
      description: 'Keynote presentation on the CASPER project methodology and preliminary results.'
    },
    {
      id: '2',
      title: 'Interactive Demo: Causal Structure Learning Tools',
      type: 'workshop',
      venue: 'NeurIPS Workshop on Causal Representation Learning',
      date: '2024-12-10',
      location: 'Vancouver, Canada',
      presenter: 'Dr. James Thompson',
      description: 'Hands-on workshop demonstrating the CASPER toolkit for researchers.'
    },
    {
      id: '3',
      title: 'AI Meets Neuroscience: The Future of Brain Research',
      type: 'seminar',
      venue: 'Max Planck Institute for Human Development',
      date: '2024-11-20',
      location: 'Berlin, Germany',
      presenter: 'Prof. Michael Rodriguez',
      description: 'Public seminar on the implications of AI-driven causal discovery for neuroscience.'
    }
  ];

  const getStatusColor = (status: Publication['status']) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'accepted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-preparation':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: Publication['type']) => {
    switch (type) {
      case 'journal':
        return <FileText className="w-4 h-4" />;
      case 'conference':
        return <Users className="w-4 h-4" />;
      case 'workshop':
        return <Award className="w-4 h-4" />;
      case 'preprint':
        return <Calendar className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getDisseminationTypeColor = (type: DisseminationActivity['type']) => {
    switch (type) {
      case 'conference':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'workshop':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'seminar':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'poster':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'media':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Publications & Dissemination
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing our research findings and engaging with the scientific community through 
            publications, conferences, and outreach activities.
          </p>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Publications</h3>
          </div>
          
          <div className="grid gap-6">
            {publications.map((publication) => (
              <Card key={publication.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getTypeIcon(publication.type)}
                        <span className="text-sm font-medium text-gray-500 capitalize">
                          {publication.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(publication.status)}`}>
                          {publication.status.replace('-', ' ')}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {publication.title}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {publication.authors.join(', ')}
                      </p>
                      <p className="text-sm text-gray-500">
                        {publication.venue} ({publication.year})
                      </p>
                    </div>
                    {(publication.doi || publication.url) && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="shrink-0"
                        onClick={() => window.open(publication.url || `https://doi.org/${publication.doi}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    )}
                  </div>
                </CardHeader>
                {publication.abstract && (
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {publication.abstract}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Dissemination Activities Section */}
        <div>
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Dissemination Activities</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disseminationActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDisseminationTypeColor(activity.type)}`}>
                      {activity.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Venue:</strong> {activity.venue}</p>
                    <p><strong>Location:</strong> {activity.location}</p>
                    <p><strong>Presenter:</strong> {activity.presenter}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated on Our Research
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Follow our latest publications and join us at upcoming conferences and workshops 
                to learn more about the CASPER project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Subscribe to Updates
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Contact Research Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;