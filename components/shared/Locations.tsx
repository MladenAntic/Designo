import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import CallToAction from "./CallToAction";
import { locations } from "@/constants";
import { LocationCardProps } from "@/types";

const LocationCard = ({ image, title }: LocationCardProps) => (
  <div className="flex flex-col items-center justify-center gap-8">
    <Image src={image} width={202} height={202} alt={title} className="max-lg:size-[150px]" />
    <h3 className="text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-black max-lg:text-base">
      {title}
    </h3>
    <CallToAction text="See Location" href="/locations" background="bg-peach" textColor="text-white" />
  </div>
);

const Locations = () => {
  return (
    <section className="mb-40">
      <Wrapper className="flex items-center justify-between max-md:flex-col max-md:gap-20">
        {locations.map((location) => (
          <LocationCard key={location.title} {...location} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Locations;
