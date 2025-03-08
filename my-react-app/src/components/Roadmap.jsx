import { useState, useEffect, useCallback } from "react";
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

  const closeModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedEvent) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedEvent, closeModal]);

  const handleDownloadTemplate = () => {
    const pdfUrl = 'https://docs.google.com/document/d/1O3OcgYB-3nOISNuYLq80oy2_z7crxkQ7/edit?tab=t.0';
    window.open(pdfUrl, '_blank');
  };

  // Handle click outside modal
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container px-4 sm:px-6 md:px-8 md:pb-10">
        <Heading tag="Navonmesh 2025" title="Tech Competitions" />

        <div className="relative grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
          {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`flex flex-col even:md:translate-y-[5rem] p-0.5 rounded-[1.5rem] sm:rounded-[2rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              } hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out w-full`}
              key={item.id}
            >
              <div className="relative p-4 sm:p-8 md:p-12 bg-n-8 rounded-[1.4375rem] sm:rounded-[1.9375rem] overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover opacity-10"
                    src={grid}
                    width={500}
                    height={500}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-3">
                    <Tagline className="text-base sm:text-lg">{item.date}</Tagline>

                    <div className="flex items-center px-3 sm:px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                        src={item.status === "done" ? check2 : loading1}
                        alt={status}
                      />
                      <div className="tagline text-sm sm:text-base">{status}</div>
                    </div>
                  </div>

                  <div className="relative mb-6 sm:mb-8 -mx-4 sm:-mx-8 md:-mx-12 aspect-[16/9] overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{item.title}</h4>
                  <p className="text-base sm:text-lg text-n-4 mb-6 sm:mb-8 line-clamp-3">{item.text}</p>
                  <Button className="w-full text-black text-base sm:text-lg py-3 sm:py-4" onClick={() => handleExplore(item)}>
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
        </div>

        {selectedEvent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 cursor-pointer"
            onClick={handleModalClick}
          >
            <div className="relative w-full max-w-[90%] sm:max-w-2xl p-4 sm:p-8 bg-n-8 rounded-2xl sm:rounded-[2.5rem] max-h-[90vh] overflow-y-auto cursor-default">
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-n-4 hover:text-n-1 p-2 text-xl"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selectedEvent.title}</h3>
              <div className="space-y-4 sm:space-y-6 text-n-4">
                {selectedEvent.details && (
                  <div className="space-y-4 sm:space-y-6">
                    {selectedEvent.details.description && (
                      <div>
                        <p className="text-sm sm:text-base text-n-1">{selectedEvent.details.description}</p>
                      </div>
                    )}
                    {selectedEvent.details.guidelines && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">📌 Competition Guidelines</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.guidelines.map((guideline, index) => (
                            <li key={index} className="flex items-start text-sm sm:text-base">
                              <span className="mr-2">✅</span>
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.technical_specs && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">🎥 Technical Specifications</h5>
                        <div className="space-y-4">
                          <div>
                            <h6 className="font-semibold mb-2 text-n-1">Frame Rate (Recommended):</h6>
                            <ul className="list-none space-y-1">
                              {selectedEvent.details.technical_specs.frame_rates.map((rate, index) => (
                                <li key={index} className="flex items-start text-sm sm:text-base">
                                  <span className="mr-2">•</span>
                                  <span>{rate}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold mb-2 text-n-1">Filming Tips:</h6>
                            <ul className="list-none space-y-1">
                              {selectedEvent.details.technical_specs.filming_tips.map((tip, index) => (
                                <li key={index} className="flex items-start text-sm sm:text-base">
                                  <span className="mr-2">•</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedEvent.details.evaluation_criteria && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">📊 Evaluation Criteria</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.evaluation_criteria.map((criteria, index) => (
                            <li key={index} className="flex items-start text-sm sm:text-base">
                              <span className="mr-2">✅</span>
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.important_guidelines && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">⚠ Important Guidelines</h5>
                        <ul className="list-none space-y-2">
                          {selectedEvent.details.important_guidelines.map((guideline, index) => (
                            <li key={index} className="flex items-start text-sm sm:text-base">
                              <span className="mr-2">{index + 1}.</span>
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEvent.details.disclaimer && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">📜 Disclaimer</h5>
                        <p className="text-sm sm:text-base">{selectedEvent.details.disclaimer}</p>
                      </div>
                    )}
                    {selectedEvent.details.submission && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">📤 Submission</h5>
                        <p className="text-sm sm:text-base">{selectedEvent.details.submission}</p>
                      </div>
                    )}
                    {selectedEvent.details.contacts && (
                      <div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-n-1">📞 For Queries</h5>
                        <ul className="space-y-2">
                          {selectedEvent.details.contacts.map((contact, index) => (
                            <li key={index} className="flex items-center text-sm sm:text-base">
                              <span className="text-n-1">{contact.name}</span>
                              <span className="mx-2">-</span>
                              <span>{contact.phone}</span>
                            </li>
                          ))}
                        </ul>
                        {selectedEvent.details.prepared_by && (
                          <p className="mt-4 text-sm text-n-3">Prepared by: {selectedEvent.details.prepared_by}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                  {selectedEvent.title === "Poster Competition" && (
                    <Button
                      onClick={handleDownloadTemplate}
                      className="w-full sm:w-auto text-sm sm:text-base bg-white/10 hover:bg-white/20"
                    >
                      Download Template
                    </Button>
                  )}
                  <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLScf9nY4_HNmwNb9-EYHOb3tzksKrC7JwXErk8QQGCh0HQQAEA/viewform"
                    target="_blank"
                    className="w-full sm:w-auto text-sm sm:text-base"
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
