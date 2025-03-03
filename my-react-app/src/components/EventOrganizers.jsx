import React from 'react';
import { eventOrganizers } from '../constants';
import despuOrange from '../assets/despuOrange.png';

const EventOrganizers = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="h2 mb-12 xl:mb-16 text-center text-white">Event Organizers & Supporters</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {/* Supporter - IIC (Left) */}
          <div className="flex flex-col items-center max-w-[300px]">
            <a href="https://iic.mic.gov.in/" target="_blank" rel="noopener noreferrer" className="w-64 h-64 flex items-center justify-center rounded-2xl bg-n-7 border border-n-6 mb-6 p-4 hover:bg-n-6 transition-colors">
              <img 
                src={eventOrganizers.supporter.logo} 
                alt={eventOrganizers.supporter.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>
            <p className="text-lg font-semibold text-white mb-2">Supported by</p>
            <p className="text-base text-n-4">{eventOrganizers.supporter.name}</p>
          </div>

          {/* Organizer - DES PU (Center) */}
          <div className="flex flex-col items-center max-w-[500px]">
            <a href="https://despu.edu.in/" target="_blank" rel="noopener noreferrer" className="w-96 h-96 flex items-center justify-center rounded-2xl bg-n-7 border border-n-6 mb-6 p-6 hover:bg-n-6 transition-colors">
              <img 
                src={despuOrange}
                alt={eventOrganizers.organizer.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>
            <p className="text-xl font-semibold text-white mb-2">Organized by</p>
     
            <p className="text-base text-n-4">School of Engineering and Technology</p>
            <p className="text-lg text-n-4">{eventOrganizers.organizer.name}</p>
          </div>

          {/* Sponsor - IET (Right) */}
          <div className="flex flex-col items-center max-w-[300px]">
            <a href="https://india.theiet.org/" target="_blank" rel="noopener noreferrer" className="w-64 h-64 flex items-center justify-center rounded-2xl bg-n-7 border border-n-6 mb-6 p-4 hover:bg-n-6 transition-colors">
              <img 
                src={eventOrganizers.sponsor.logo} 
                alt={eventOrganizers.sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>
            <p className="text-lg font-semibold text-white mb-2">Sponsored by</p>
            <p className="text-base text-n-4">{eventOrganizers.sponsor.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOrganizers;