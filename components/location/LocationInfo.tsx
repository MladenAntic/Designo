import { LocationInfoProps } from "@/types";

const LocationInfo = ({
  country,
  office,
  address1,
  address2,
  number,
  email,
}: LocationInfoProps) => (
  <div className="relative flex-1 overflow-hidden rounded-[15px] bg-[#fdf3f0] p-24 max-xl:w-3/5 max-xl:px-12 max-lg:w-full max-md:pt-12">
    <h2 className="mb-6 text-[40px] font-medium leading-[48px] text-peach">
      {country}
    </h2>
    <div className="flex items-center gap-7 max-md:flex-col max-md:items-start">
      <p className="font-medium text-black max-lg:text-sm lg:text-sm xl:text-base">
        <strong>{office}</strong> <br />
        {address1} <br />
        {address2}
      </p>
      <div className="">
        <h5 className="text-base font-bold leading-[26px] text-black max-lg:text-sm lg:text-sm xl:text-base">
          Contact
        </h5>
        <p className="text-base font-medium leading-[26px] text-black max-lg:text-sm lg:text-sm xl:text-base">
          P: {number}
        </p>
        <p className="text-base font-medium leading-[26px] text-black max-lg:text-sm lg:text-sm xl:text-base">
          M: {email}
        </p>
      </div>
    </div>

    <div className="about-bg-circle absolute bottom-0 left-[25px] size-[292px] rounded-full"></div>
    <div className="about-bg-circle absolute bottom-0 left-1/2 size-[292px] -translate-x-1/2 rounded-full  max-xl:left-[350px]"></div>
  </div>
);

export default LocationInfo;
