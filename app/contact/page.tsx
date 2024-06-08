import Form from "@/components/Form";
import InfoBanner from "@/components/shared/InfoBanner";
import Locations from "@/components/shared/Locations";

const page = () => {
  return (
    <div>
      <InfoBanner
        title="Contact Us"
        description="Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
      >
        <div className="flex flex-1 items-center justify-center max-lg:w-full">
          <Form />
        </div>
      </InfoBanner>
      <Locations />
    </div>
  );
};

export default page;
