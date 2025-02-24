import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleExplore = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Navonmesh 2025" title="Tech Competitions" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } hover:shadow-lg hover:scale-105 transition-transform duration-300`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4 mb-6">{item.text}</p>
                  <Button className="w-full" onClick={() => handleExplore(item)}>Explore</Button>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl p-8 bg-n-8 rounded-[2.5rem] max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-6 right-6 text-n-4 hover:text-n-1"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="h3 mb-4">{selectedEvent.title}</h3>
              <div className="space-y-6 text-n-4">
                {selectedEvent.details && (
                  <div className="space-y-6">
                    {selectedEvent.details.description && (
                      <div>
                        <p className="text-n-1">{selectedEvent.details.description}</p>
                      </div>
                    )}
                    {selectedEvent.details.topics && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">Topics of Interest</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.topics.map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.guidelines && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">Guidelines</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.guidelines.map((guideline, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.submission && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">Submission</h5>
                        <p>{selectedEvent.details.submission}</p>
                      </div>
                    )}
                    {selectedEvent.details.eligibility && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">Eligibility</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.eligibility.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.prizes && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">Prizes</h5>
                        <p>{selectedEvent.details.prizes}</p>
                      </div>
                    )}
                    {selectedEvent.details.contacts && (
                      <div>
                        <h5 className="h6 mb-3 text-n-1">For Queries</h5>
                        <ul className="space-y-2">
                          {selectedEvent.details.contacts.map((contact, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-n-1">{contact.name}</span>
                              <span className="mx-2">-</span>
                              <span>{contact.phone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    href={selectedEvent.rulebookUrl || "#"}
                    target="_blank"
                    className="w-full sm:w-auto"
                  >
                    Download Rulebook
                  </Button>
                  <Button
                    href={selectedEvent.registrationUrl || "#"}
                    target="_blank"
                    className="w-full sm:w-auto"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Roadmap;
