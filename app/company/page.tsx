import Contact from "@/components/Contact";
import AboutCard from "@/components/company/AboutCard";
import InfoBanner from "@/components/shared/InfoBanner";
import Locations from "@/components/shared/Locations";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <InfoBanner
        title="About Us"
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
      >
        <div className="h-[480px] flex-1 rounded-r-[15px] max-lg:w-full max-lg:rounded-b-[15px] max-lg:rounded-tr-none">
          <Image
            src="/about.png"
            width={1350}
            height={480}
            className="size-full rounded-r-[15px] object-cover max-lg:w-full max-lg:rounded-b-[15px] max-lg:rounded-tr-none max-sm:h-full"
            alt="About Us"
          />
        </div>
      </InfoBanner>
      <AboutCard
        image="/talent.png"
        title="World-class talent"
        descriptionTop="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        descriptionBottom="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission."
      />
      <Locations />
      <AboutCard
        image="/the-real-deal.png"
        title="The real deal"
        descriptionTop="As strategic partners in our client's businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        descriptionBottom="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        reverse={true}
      />
      <Contact />
    </div>
  );
};

export default page;
