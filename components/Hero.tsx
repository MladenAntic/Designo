import Image from "next/image";
import Wrapper from "./Wrapper";
import { FiChevronRight } from "react-icons/fi";
import CallToAction from "./shared/CallToAction";
import { Meteors } from "./ui/meteors";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <Wrapper>
      <section className="relative flex h-[640px] items-start justify-evenly gap-10 overflow-hidden rounded-[15px] bg-peach py-[145px] max-[1192px]:h-[843px] max-[1192px]:flex-col max-[1192px]:items-center max-[1192px]:justify-center max-[1192px]:gap-0">
        <div className="relative z-10 w-[540px] max-[1192px]:mt-36 max-[1192px]:w-full max-[1192px]:px-7 max-[1192px]:text-center">
          <TextGenerateEffect
            words="Award-winning custom designs and digital branding solutions"
          />
          <p className="my-8 w-[445px] text-base leading-[26px] text-white max-[1192px]:w-full max-md:text-sm max-sm:text-xs">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <CallToAction
            text="Learn More"
            href="/company"
            background="bg-white"
            textColor="text-black"
          />
        </div>
        <div className="relative z-10 max-[1192px]:bottom-[-85px]">
          <Image
            src="/smartphone.webp"
            width={284}
            height={573}
            alt="smartphone"
            className=""
          />
          <Image
            src="/inside-smartphone.png"
            width={259}
            height={573}
            alt="Smartphone Image"
            className="absolute left-[12px] top-[10px] rounded-t-[36px]"
          />
          <Image
            src="/frame.svg"
            width={228}
            height={57}
            alt="FRAME"
            className="absolute bottom-[215px] right-[12px] z-10"
          />
          <div className="absolute bottom-[120px] left-[12px] h-[155px] w-[186px] bg-black" />
          <div className="absolute bottom-[120px] right-[38px] flex size-[48px] items-center justify-center bg-white">
            <FiChevronRight size={24} className="text-darkgray" />
          </div>
        </div>

        <div className="hero-circle absolute right-0 top-0 size-[640px] rounded-full" />
        <Meteors />
      </section>
    </Wrapper>
  );
};

export default Hero;
