import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import Objectives from "@/components/Objectives";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Impact from "@/components/Impact";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectOverview />
      <Objectives />
      <Team />
      <Timeline />
      <Impact />
      <Publications />
      <Footer />
    </div>
  );
};

export default Index;
