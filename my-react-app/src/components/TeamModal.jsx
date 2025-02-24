import React from "react";

const TeamModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const teamMembers = [
    "RAJ DILIP SHINDE",
    "SHUBHAM DEEPAK DINDORKAR",
    "AYUSH BRIJESH TRIPATHI",
    "ASHITOSH ASHOK LAVHATE"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-n-8 rounded-2xl p-6 max-w-md w-full mx-4 border border-n-6">
        <div className="text-center mb-6">
          <h3 className="h4 mb-2">Our Team</h3>
          <p className="text-n-4">The creators behind this website</p>
        </div>
        
        <div className="grid gap-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-n-7 border border-n-6 hover:bg-n-6 transition-colors"
            >
              <p className="text-base font-medium text-n-1">{member}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-n-4 hover:text-n-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamModal;