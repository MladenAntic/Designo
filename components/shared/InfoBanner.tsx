import Wrapper from "../Wrapper";
import { InfoBannerProps } from "@/types";
import { Meteors } from "../ui/meteors";

const InfoBanner = ({title, description, children}: InfoBannerProps) => {
  return (
    <Wrapper>
      <section className="relative mb-40 flex h-[480px] items-center justify-center gap-16 overflow-hidden rounded-[15px] bg-peach py-[145px] pl-28 max-xl:pl-16 max-lg:h-[632px] max-lg:flex-col max-lg:gap-0 max-lg:py-0 max-lg:pl-0 max-lg:pt-8">
        <div className="relative z-10 w-[540px] flex-1 max-lg:w-full max-lg:pt-8 max-lg:text-center">
          <h1 className="text-[48px] font-medium leading-[48px] text-white max-lg:-mb-5 max-lg:text-3xl max-sm:text-xl">
            {title}
          </h1>
          <p className="my-8 w-[445px] text-base leading-[26px] text-white max-lg:mx-auto max-lg:w-[90%] max-lg:text-sm max-sm:text-xs">
            {description}
          </p>
        </div>
        <div className="z-10 w-full">{children}</div>

        <div className="hero-circle absolute left-0 top-[-150px] size-[640px] rounded-full" />

        <Meteors />
      </section>
    </Wrapper>
  );
};

export default InfoBanner;
