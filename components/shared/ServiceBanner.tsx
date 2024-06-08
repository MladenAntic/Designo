import { ServiceBannerProps } from "@/types";
import Wrapper from "../Wrapper";
import { Meteors } from "../ui/meteors";

const ServiceBanner = ({ title, description }: ServiceBannerProps) => {
  return (
    <Wrapper className="relative z-10 mb-40 overflow-hidden rounded-[15px]">
      <section className="flex h-[252px] items-center justify-center rounded-[15px] bg-peach text-center">
        <div className="z-10 w-[459px] max-lg:text-center max-md:w-full">
          <h2 className="text-[48px] font-medium leading-[48px] text-white max-sm:text-[32px]">
            {title}
          </h2>
          <p className="mt-8 w-[459px] text-base leading-[26px] text-white max-md:w-full max-md:px-8 max-sm:mt-4 max-sm:text-sm">
            {description}
          </p>
        </div>
      </section>

      <div className="contact-bg-circle absolute -top-1/2 right-[-10px] size-[292px] rounded-full" />
      <div className="contact-bg-circle absolute -top-1/2 right-[282px] size-[292px] rounded-full" />
      <div className="contact-bg-circle absolute -bottom-1/2 right-[-10px] size-[292px] rounded-full" />
      <div className="contact-bg-circle absolute -bottom-1/2 right-[282px] size-[292px] rounded-full" />
      <div className="contact-bg-circle absolute -bottom-1/2 right-[570px] size-[292px] rounded-full" />

      <Meteors />
    </Wrapper>
  );
};

export default ServiceBanner;
