import Wrapper from "./Wrapper";
import { serviceCards } from "@/constants";
import ServiceCard from "./shared/ServiceCard";

const Services = () => {
  return (
    <Wrapper>
      <section className="services my-40 grid h-[640px] grid-cols-2 gap-6 max-lg:grid-cols-1">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.uniqueClassname}
            uniqueClassname={card.uniqueClassname}
            serviceName={card.serviceName}
            link={card.link}
          />
        ))}
      </section>
    </Wrapper>
  );
};

export default Services;
