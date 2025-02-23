import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1.5rem] max-lg:flex-wrap justify-center">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[20rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-12 odd:py-8 odd:my-3 hover:border-n-5 transition-colors [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 shadow-sm hover:shadow-lg"
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
            <Button className="w-full mb-5" href="/pricing" white>
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
