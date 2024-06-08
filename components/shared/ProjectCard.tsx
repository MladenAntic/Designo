import { ProjectCardProps } from "@/types";
import Image from "next/image";
import { CardContainer } from "../ui/3d-card";

const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <CardContainer>
      <div className="relative h-[300px] w-full rounded-t-[15px] bg-white">
        <Image
          src={image}
          width={2000}
          height={300}
          alt="Project 1"
          className="size-full rounded-t-[15px] object-cover"
        />
      </div>

      <div className="h-[178px] rounded-b-[15px] p-8 text-center transition-colors duration-200 group-hover:bg-peach lg:p-6 xl:p-8">
        <h3 className="text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-peach group-hover:text-white max-lg:text-base lg:text-base xl:text-[20px]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-[26px] text-black group-hover:text-white max-lg:text-sm lg:text-sm xl:text-base">
          {description}
        </p>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
