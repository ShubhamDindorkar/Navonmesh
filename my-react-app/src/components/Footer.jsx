import React, { useState } from "react";
import Section from "./Section";
import { socials } from "../constants";
import TeamModal from "./TeamModal";

const Footer = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-start gap-10 max-sm:flex-col">
          <div className="flex flex-col gap-4">
            <div className="text-n-4">
              <p className="mb-2">📞 020 47200000</p>
              <p className="max-w-[300px]">
                📍 Mukunddas Lohia Academic Complex,
                Behind BMCC, 182, Agharkar Road,
                Shivajinagar, Pune 411 004
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsTeamModalOpen(true)}
            className="text-n-4 hover:text-n-1 transition-colors font-medium order-first sm:order-none"
          >
            👥 Team Credits
          </button>

          <ul className="flex gap-5 flex-wrap items-center justify-end">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="text-n-4 hover:text-n-1 transition-colors"
              >
                {item.title === 'Twitter' ? '🐦 ' : item.title === 'Facebook' ? '👥 ' : item.title === 'LinkedIn' ? '💼 ' : '🌐 '}{item.title}
              </a>
            ))}
          </ul>
        </div>
        
        <p className="caption text-n-4 text-center border-t border-n-6 pt-8">
          © 2025 All Rights Reserved
        </p>
      </div>

      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </Section>
  );
};

export default Footer;
