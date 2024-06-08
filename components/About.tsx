import Image from "next/image";
import Wrapper from "./Wrapper";
import { aboutCards } from "@/constants";
import { AboutCardProps } from "@/types";

const AboutCard = ({ image, title, description }: AboutCardProps) => (
  <div className="flex flex-col items-center justify-center gap-8">
    <Image src={image} width={202} height={202} alt={title} />
    <h3 className="text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-black max-sm:text-base">
      {title}
    </h3>
    <p className="text-center text-base leading-[26px] max-sm:text-sm">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <section className="mb-40">
      <Wrapper className="flex items-center justify-between gap-24 max-lg:flex-col max-lg:gap-12">
        {aboutCards.map((card) => (
          <AboutCard key={card.title} {...card} />
        ))}
      </Wrapper>
    </section>
  );
};

export default About;
