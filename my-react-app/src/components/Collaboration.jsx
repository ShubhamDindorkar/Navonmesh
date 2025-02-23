import React from "react";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { navonmesh1 } from "../assets";

const FAQ = () => {
  const [expandedItems, setExpandedItems] = React.useState([]);

  const toggleItem = (id) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems = [
    {
      id: 1,
      question: "What is Navonmesh Tech Fest?",
      answer: "Navonmesh Tech Fest is a premier technology festival that brings together students, professionals, and tech enthusiasts to showcase innovation, compete in various events, and explore emerging technologies."
    },
    {
      id: 2,
      question: "Who can participate in the events?",
      answer: "All students from recognized institutions can participate. Most events allow teams of up to 4 members, while some may have specific team size requirements."
    },
    {
      id: 3,
      question: "How can I register for the events?",
      answer: "Registration can be done through our online portal. Teams need to register separately for each event they wish to participate in."
    },
    {
      id: 4,
      question: "What are the main events in Navonmesh?",
      answer: "Key events include Poster Competition, Project Showcase, Hackathon, and various technical workshops focusing on AI, Cybersecurity, and emerging technologies."
    },
    {
      id: 5,
      question: "Is there a registration fee?",
      answer: "Yes, there is a nominal registration fee that varies by event. Early bird registrations may get special discounts."
    }
  ];
  return (
    <Section crosses>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Frequently Asked Questions</h2>
          <p className="body-2 text-n-4 max-w-2xl mx-auto">
            Get answers to common questions about Navonmesh Tech Fest, registration process, and event details.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-n-6 last:border-none">
              <div className="py-6">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between font-semibold text-lg mb-2 hover:text-color-1 transition-colors"
                >
                  {item.question}
                  <span className={`transform transition-transform duration-300 ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="body-2 text-n-4 pt-2">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <img
            src={navonmesh1}
            alt="Navonmesh Logo"
            className="w-32 opacity-75"
          />
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
