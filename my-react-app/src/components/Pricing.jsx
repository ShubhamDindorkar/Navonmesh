import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Pricing = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2" ref={parallaxRef}>
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <div className="relative z-1">
            <ScrollParallax strength={0.1}>
              <img
                src={smallSphere}
                className="relative z-1"
                width={255}
                height={255}
                alt="Sphere"
              />
            </ScrollParallax>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <ScrollParallax strength={0.05}>
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </ScrollParallax>
          </div>
        </div>

        <Heading
          tag="Event Schedule"
          title="Competition Timeline"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <p className="text-xs font-code font-bold tracking-wider uppercase text-n-1/50">
            * All times are in IST (Indian Standard Time)
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
