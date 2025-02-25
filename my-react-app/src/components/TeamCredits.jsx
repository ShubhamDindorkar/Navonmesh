import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const TeamCredits = () => {
  const [isOpen, setIsOpen] = useState(false);

  const teamMembers = [
    { 
      name: "RAJ DILIP SHINDE", 
      linkedin: "https://www.linkedin.com/in/raj-shinde"
    },
    { 
      name: "SHUBHAM DEEPAK DINDORKAR", 
      linkedin: "https://www.linkedin.com/in/shubham-dindorkar"
    },
    { 
      name: "AYUSH BRIJESH TRIPATHI", 
      linkedin: "https://www.linkedin.com/in/ayush-tripathi"
    },
    { 
      name: "ASHITOSH ASHOK LAVHATE", 
      linkedin: "https://www.linkedin.com/in/ashitosh-lavhate"
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:from-orange-500 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-400/50"
      >
        Team Credits
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div 
            className="relative bg-gradient-to-br from-n-8 to-n-7 rounded-2xl p-8 max-w-lg w-full m-4 shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
            style={{ backdropFilter: 'blur(20px)' }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-n-4 hover:text-n-1 transition-colors duration-200"
            >
              ✕
            </button>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Binary Brains</h3>
              <p className="text-n-3 text-sm">Innovating Tomorrow's Solutions Today</p>
            </div>
            <div className="grid gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-r from-n-6/50 to-n-5/50 backdrop-blur-sm flex items-center justify-between hover:from-n-5/60 hover:to-n-4/60 transition-all duration-300 group transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">{member.name}</h4>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-n-4 hover:text-[#0A66C2] transition-colors duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCredits;