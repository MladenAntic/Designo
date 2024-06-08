import Contact from "@/components/Contact";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "@/components/shared/ProjectCard";
import Projects from "@/components/shared/Projects";
import ServiceBanner from "@/components/shared/ServiceBanner";
import ServiceCard from "@/components/shared/ServiceCard";
import { appDesignProjects } from "@/constants";

const page = () => {
  return (
    <div>
      <ServiceBanner
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <Projects>
        {appDesignProjects.map((project) => (
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
          uniqueClassname="web-design"
          serviceName="Web Design"
          link="/web-design"
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
