import DiningIcon from "../../assets/DiningIcon";
import FastDeliveryIcon from "../../assets/FastDeliveryIcon";
import PickupIcon from "../../assets/PickupIcon";

const services = [
  {
    icon: <FastDeliveryIcon />,
    title: "Fast Delivery",
    description: "Within 30 minutes",
  },
  {
    icon: <DiningIcon />,
    title: "Absolute Dining",
    description: "Best buffet restaurant",
  },
  {
    icon: <PickupIcon />,
    title: "Pickup Delivery",
    description: "Grab your food order",
  },
];

const ServiceOverview = () => {
  return (
    <div className="py-[50px] lg:py-[74px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* each service overview */}
        {services.map((service, index) => (
          <div key={index} className="flex gap-4 items-center  lg:justify-start w-full">
            <div className="shadow-icon w-[90px] h-[90px] flex items-center justify-center bg-white rounded-full p-6 hover:shadow-2xl transition-all duration-300 ease-in-out">
              {service.icon}
            </div>
            <div>
              <h3 className="mt-2 font-display text-2xl lg:text-3xl">
                {service.title}
              </h3>
              <p className="text-lg lg:text-xl text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;
