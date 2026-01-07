import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  institution: string;
  image: string;
  expertise: string[];
  email?: string;
}

interface Institution {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const Team: React.FC = () => {
  const researcher: TeamMember = {
    name: "Ambuj Mehrish",
    role: "MSCA Researcher",
    institution: "Ca' Foscari University of Venice",
    image: "/api/placeholder/200/200",
    expertise: ["Multimodal AI", "Graph Neural Networks", "Neural Decoding"],
    email: "ambuj.mehrish@unive.it"
  };

  const supervisors: TeamMember[] = [
    {
      name: "Prof. Sebastiano Vascon",
      role: "Principal Supervisor",
      institution: "Ca' Foscari University of Venice",
      image: "/api/placeholder/200/200",
      expertise: ["Computer Vision", "Graph Neural Networks", "Pattern Recognition"],
      email: "sebastiano.vascon@unive.it"
    },
    {
      name: "Prof. Dimitri Van De Ville",
      role: "Co-Supervisor",
      institution: "Neuro-X Institute, EPFL",
      image: "/api/placeholder/200/200",
      expertise: ["Neuroimaging", "Signal Processing", "Brain Connectivity"],
      email: "dimitri.vandeville@epfl.ch"
    },
    {
      name: "Prof. Valentina Borghesani",
      role: "Co-Supervisor",
      institution: "NoCE Labs, University of Geneva",
      image: "/api/placeholder/200/200",
      expertise: ["Cognitive Neuroscience", "Semantic Processing", "fMRI Analysis"],
      email: "valentina.borghesani@unige.ch"
    }
  ];

  const institutions: Institution[] = [
    {
      name: "CVML Lab - Ca' Foscari University",
      logo: "/api/placeholder/120/80",
      description: "Computer Vision and Machine Learning laboratory, internationally renowned for pioneering work in graph theory, game theory, and computer vision applications.",
      website: "https://www.unive.it/data/persone/5592033"
    },
    {
      name: "MIPLab - EPFL",
      logo: "/api/placeholder/120/80",
      description: "Medical Image Processing Lab at Neuro-X Institute, dedicated to advanced neuroimaging and signal processing for brain functional connectivity research.",
      website: "https://miplab.epfl.ch/"
    },
    {
      name: "NoCE Lab - UNIGE",
      logo: "/api/placeholder/120/80",
      description: "Neurobiology of Concepts Expression Laboratory, leading pioneering research at the nexus of neurobiology, semantics, and language processing.",
      website: "https://www.unige.ch"
    },
    {
      name: "European Commission",
      logo: "/api/placeholder/120/80",
      description: "Supporting innovative research through the Marie Skłodowska-Curie Actions program.",
      website: "https://ec.europa.eu/research/mariecurieactions/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the researcher and expert supervisors driving the CASPER project forward
          </p>
        </div>

        {/* Researcher Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Researcher
          </h3>
          <div className="flex justify-center">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg max-w-md w-full">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={researcher.image}
                      alt={researcher.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-32 h-32 mx-auto"></div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {researcher.name}
                  </h4>

                  <p className="text-blue-600 font-semibold mb-2">
                    {researcher.role}
                  </p>

                  <p className="text-gray-600 mb-4">
                    {researcher.institution}
                  </p>

                  {researcher.email && (
                    <a
                      href={`mailto:${researcher.email}`}
                      className="text-sm text-blue-500 hover:text-blue-700 mb-4 block"
                    >
                      {researcher.email}
                    </a>
                  )}

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Expertise:
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {researcher.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supervisors Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Project Supervisors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supervisors.map((supervisor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={supervisor.image}
                        alt={supervisor.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-32 h-32 mx-auto"></div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {supervisor.name}
                    </h4>

                    <p className="text-blue-600 font-semibold mb-2">
                      {supervisor.role}
                    </p>

                    <p className="text-gray-600 mb-4">
                      {supervisor.institution}
                    </p>

                    {supervisor.email && (
                      <a
                        href={`mailto:${supervisor.email}`}
                        className="text-sm text-blue-500 hover:text-blue-700 mb-4 block"
                      >
                        {supervisor.email}
                      </a>
                    )}

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Expertise:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {supervisor.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Institutions Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partner Institutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {institutions.map((institution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center flex-grow">
                    <div className="mb-6">
                      <img
                        src={institution.logo}
                        alt={institution.name}
                        className="h-16 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      {institution.name}
                    </h4>

                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {institution.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={institution.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Visit Website
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Collaborative Excellence
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The CASPER project brings together world-class researchers from leading academic institutions
                across Europe. This interdisciplinary collaboration combines expertise in computer science,
                neuroscience, and cognitive science to advance multimodal AI systems and neural decoding
                technologies for speech and audio reconstruction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
