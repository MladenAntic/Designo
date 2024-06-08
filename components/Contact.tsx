import Wrapper from "./Wrapper";
import CallToAction from "./shared/CallToAction";
import { Meteors } from "./ui/meteors";

const Contact = () => {
  return (
    <Wrapper className="relative z-10 -mb-14 overflow-hidden rounded-[15px]">
      <section className="flex h-[292px] items-center justify-between rounded-[15px] bg-peach px-[95px] pb-[46px] pt-[72px] max-lg:flex-col max-lg:p-8">
        <div className="z-10 w-[459px] max-lg:text-center max-md:w-full">
          <h2 className="text-[40px] font-medium leading-[40px] text-white max-sm:text-[32px]">
            Let’s talk about your project
          </h2>
          <p className="mt-8 w-[459px] text-base leading-[26px] text-white max-lg:mt-5 max-md:mt-4 max-md:w-full max-sm:text-sm">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <CallToAction
          text="Get in Touch"
          href="/contact"
          background="bg-white"
          textColor="text-black"
        />
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

export default Contact;
