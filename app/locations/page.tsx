"use client";

import Contact from "@/components/Contact";
import Wrapper from "@/components/Wrapper";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToggleMenu } from "@/contexts/ToggleMenuContext";
import LocationInfo from "@/components/location/LocationInfo";

const Page = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/"), {
        loading: () => (
          <Skeleton className="size-full rounded-[15px] bg-light-peach" />
        ),
        ssr: false,
      }),
    []
  );

  const { isOpen } = useToggleMenu();

  return (
    <div>
      <section className="mb-40">
        <Wrapper>
          <div className="mb-8 flex h-[326px] items-center gap-7 max-lg:h-[680px] max-lg:flex-col-reverse">
            <LocationInfo
              country="Canada"
              office="Designo Central Office"
              address1="3886 Wellington Street"
              address2="Toronto, Ontario M9C 3J5"
              number="+1 253-863-8967"
              email="contact@designo.co"
            />
            <div
              className={`size-[350px] rounded-[15px] max-lg:w-full ${isOpen && "z-[-999]"}`}
            >
              <Map posix={[43.65404, -79.38264]} />
            </div>
          </div>

          <div className="mb-8 flex h-[326px] items-center gap-7 max-lg:h-[680px] max-lg:flex-col">
            <div
              className={`size-[350px] rounded-[15px] max-lg:w-full ${isOpen && "z-[-999]"}`}
            >
              <Map posix={[-32.62786, 146.24572]} />
            </div>
            <LocationInfo
              country="Australia"
              office="Designo AU Office"
              address1="19 Balonne Street"
              address2="New South Wales 2443"
              number="(02) 6720 9092"
              email="contact@designo.au"
            />
          </div>

          <div className="mb-8 flex h-[326px] items-center gap-7 max-lg:h-[680px] max-lg:flex-col-reverse">
            <LocationInfo
              country="United Kingdom"
              office="Designo UK Office"
              address1="13 Colorado Way"
              address2="Rhyd-y-fro SA8 9GA"
              number="078 3115 1400"
              email="contact@designo.uk"
            />
            <div
              className={`size-[350px] rounded-[15px] max-lg:w-full ${isOpen && "z-[-999]"}`}
            >
              <Map posix={[51.73204, -3.86123]} />
            </div>
          </div>
        </Wrapper>
      </section>

      <Contact />
    </div>
  );
};

export default Page;
