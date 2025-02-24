import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import TeamCredits from "./TeamCredits";
import { logodes } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col items-center gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* College Logo */}
          <div className="col-span-1 flex items-center justify-center">
            <a
              href="https://despu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logodes}
                alt="DES Pune University"
                className="w-48 h-auto"
              />
            </a>
          </div>

          {/* Social Media Links */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <ul className="flex gap-5 flex-wrap justify-center">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <TeamCredits />
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 flex flex-col items-center md:items-start gap-4 text-n-4">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="phone" className="text-xl">📞</span>
              <span className="hover:text-color-1 transition-colors">
                020 47200000
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span role="img" aria-label="location" className="text-xl mt-1">📍</span>
              <address className="not-italic hover:text-color-1 transition-colors text-center md:text-left">
                Mukunddas Lohia Academic Complex,<br />
                Behind BMCC, 182, Agharkar Road,<br />
                Shivajinagar, Pune 411 004
              </address>
            </div>
          </div>
        </div>

        <p className="caption text-n-4 text-center mt-6">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
