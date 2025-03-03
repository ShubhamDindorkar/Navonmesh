import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="About Navonmesh Tech Fest"
          text="Empowering Innovation and Technology"
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row items-center h-auto lg:h-[39rem] mb-5 p-4 lg:p-8 xl:p-20 border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full lg:w-3/5 h-full pointer-events-none">
              <img
                className="w-full h-full object-cover opacity-50 lg:opacity-100 lg:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 w-full lg:w-[17rem] ml-0 lg:ml-auto mt-60 lg:mt-0 bg-n-8/90 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none">
              <h4 className="h4 mb-4 text-white lg:text-n-1">About Navonmesh</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Navonmesh Tech Fest is a premier technology festival celebrating innovation and creativity
              </p>
              <ul className="body-2">
                {[
                  "Innovative Competitions",
                  "Networking Opportunities",
                  "Exciting Prizes",
                  "Valuable Certificates",
                  
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-n-3">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Student Innovation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Showcase your skills and ideas at Navonmesh Tech Fest. Join us in shaping the future!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Build connections...</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Participate in competitions and events led by teachers and gain practical experience in tech competitions.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
