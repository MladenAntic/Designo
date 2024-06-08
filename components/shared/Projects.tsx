import { ReactNode } from "react";
import Wrapper from "../Wrapper";

const Projects = ({ children }: { children: ReactNode }) => {
  return (
    <section className="mb-40">
      <Wrapper className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </Wrapper>
    </section>
  );
};

export default Projects;
