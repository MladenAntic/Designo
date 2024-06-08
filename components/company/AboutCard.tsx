import Wrapper from "@/components/Wrapper";
import { AboutBannerProps } from "@/types";
import Image from "next/image";

const AboutCard = ({
  image,
  title,
  descriptionTop,
  descriptionBottom,
  reverse,
}: AboutBannerProps) => (
  <section className="mb-40 h-[640px]">
    <Wrapper
      className={`flex items-center gap-28 rounded-[15px] bg-[#fdf3f0] ${reverse ? "pl-24 max-lg:pl-0 max-lg:pt-10" : "pr-24 max-lg:pb-10 max-lg:pr-0"} relative overflow-hidden max-lg:flex-col max-lg:gap-14 max-lg:pr-0`}
    >
      {reverse ? (
        <>
          <div className="z-10 flex-1 max-lg:text-center">
            <h3 className="mb-6 text-[40px] font-medium leading-[48px] text-peach max-md:text-4xl max-sm:text-[32px]">
              {title}
            </h3>
            <p className="text-base leading-[26px] text-black max-lg:mx-auto max-lg:w-[90%] max-md:text-sm max-sm:text-xs">
              {descriptionTop}
              <br />
              <br />
              {descriptionBottom}
            </p>
          </div>

          <div className="z-10 h-[640px] flex-1 rounded-r-[15px] max-lg:size-full max-lg:rounded-none max-lg:rounded-b-[15px]">
            <Image
              src={image}
              width={500}
              height={640}
              alt="Talent"
              className="size-full rounded-r-[15px] object-cover max-lg:h-[320px] max-lg:w-full max-lg:rounded-none max-lg:rounded-b-[15px]"
            />
          </div>
        </>
      ) : (
        <>
          <div className="z-10 h-[640px] flex-1 rounded-l-[15px] max-lg:size-full max-lg:rounded-none max-lg:rounded-t-[15px]">
            <Image
              src={image}
              width={500}
              height={640}
              alt="Talent"
              className="size-full rounded-l-[15px] object-cover max-lg:h-[320px] max-lg:w-full max-lg:rounded-none max-lg:rounded-t-[15px]"
            />
          </div>

          <div className="z-10 flex-1 max-lg:text-center">
            <h3 className="mb-6 text-[40px] font-medium leading-[48px] text-peach max-md:text-4xl max-sm:text-[32px]">
              {title}
            </h3>
            <p className="text-base leading-[26px] text-black max-lg:mx-auto max-lg:w-[90%] max-md:text-sm max-sm:text-xs">
              {descriptionTop}
              <br />
              <br />
              {descriptionBottom}
            </p>
          </div>
        </>
      )}

      <div
        className={`about-bg-circle absolute bottom-0 left-1/2 size-[292px] -translate-x-1/2 rounded-full ${reverse ? "max-lg:top-0" : ""}`}
      />
      <div
        className={`about-bg-circle absolute bottom-0 ${reverse ? "left-[205px] max-lg:top-0" : "right-[205px]"} size-[292px] rounded-full`}
      />
    </Wrapper>
  </section>
);

export default AboutCard;
