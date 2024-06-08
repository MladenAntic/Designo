import { cn } from "@/lib/utils";
import { ServiceCardProps } from "@/types";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { WobbleCard } from "../ui/wobble-card";

const ServiceCard = ({
  uniqueClassname,
  serviceName,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <WobbleCard
      containerClassName={`${uniqueClassname}`}
      className={cn(
        `group relative flex items-center justify-center rounded-[15px] bg-no-repeat`,
        className
      )}
    >
      <div className="absolute inset-0 size-full rounded-[15px] bg-black/70 transition-colors duration-200 group-hover:bg-light-peach/25" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <h2 className="text-[40px] font-medium uppercase leading-[48px] tracking-[2px] text-white max-xl:text-3xl max-sm:text-2xl">
          {serviceName}
        </h2>
        <Link
          href={link}
          className="flex items-center gap-2 text-[15px] font-medium uppercase tracking-[5px] text-white transition-all duration-200 hover:gap-6 max-sm:text-xs"
        >
          View Projects
          <FiChevronRight size={24} className="text-peach" />
        </Link>
      </div>
    </WobbleCard>
  );
};

export default ServiceCard;
