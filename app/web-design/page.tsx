import Contact from "@/components/Contact";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "@/components/shared/ProjectCard";
import Projects from "@/components/shared/Projects";
import ServiceBanner from "@/components/shared/ServiceBanner";
import ServiceCard from "@/components/shared/ServiceCard";
import { webDesignProjects } from "@/constants";

const page = () => {
  return (
    <div>
      <ServiceBanner
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <Projects>
        {webDesignProjects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </Projects>
      <Wrapper className="mb-40 flex h-[308px] items-center gap-8 max-lg:flex-col">
        <ServiceCard
          uniqueClassname="app-design"
          serviceName="App Design"
          link="/app-design"
          className="h-full flex-1 max-lg:w-full"
        />
        <ServiceCard
          uniqueClassname="graphic-design"
          serviceName="Graphic Design"
          link="/graphic-design"
          className="h-full flex-1 max-lg:w-full"
        />
      </Wrapper>
      <Contact />
    </div>
  );
};

export default page;
