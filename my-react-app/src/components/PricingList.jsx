import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { useEffect, useRef } from "react";

const PricingList = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Calculate angle for each card in the circle
        const angle = (index / pricing.length) * Math.PI * 2;
        
        // Calculate distance from mouse to center
        const distX = clientX - centerX;
        const distY = clientY - centerY;
        
        // Calculate movement based on mouse position and card's angle
        const radius = 20; // Adjust this to control movement amount
        const moveX = Math.cos(angle) * radius * (distX / centerX);
        const moveY = Math.sin(angle) * radius * (distY / centerY);

        // Apply the transform with smooth transition
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex gap-[1.5rem] max-lg:flex-wrap justify-center relative">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          ref={el => cardsRef.current[index] = el}
          className="w-[20rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-12 odd:py-8 odd:my-3 hover:border-n-5 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 shadow-sm hover:shadow-lg transition-all duration-300"
          style={{
            transformOrigin: 'center center',
            willChange: 'transform'
          }}
        >
          <h4 className="h4 mb-3">{item.title}</h4>

          <p className="body-2 min-h-[3.5rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[4.5rem] mb-5">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {item.price && (
            <Button className="w-full mb-5 text-black" href="/pricing" white>
              Get started
            </Button>
          )}

          <ul className="space-y-0.5">
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" className="mt-0.5" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
