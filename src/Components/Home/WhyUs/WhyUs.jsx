import React from "react";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";
import WhyUsCard from "./WhyUsCard";

/*grid-cols-1: This sets the number of columns in the grid to 1 on all screen sizes.
  md:grid-cols-2: This sets the number of columns to 2 when the screen size is at least medium (md) and larger.
  lg:grid-cols-3: This sets the number of columns to 3 when the screen size is at least large (lg) and larger.
*/

const WhyUs = () => {
  const icon1 = <SiWebmoney className="text-green-500 mx-auto" size={48} />;
  const icon2 = <FaUsers className="text-green-500 mx-auto" size={48} />;
  const icon3 = <FaShippingFast className="text-green-500 mx-auto" size={48} />;

  return (
    <div className="flex flex-col justify-center container
                    md:mt-16 py-10">
      <h1 className="font-bold text-4xl text-center">
        Why choose <span className="text-primary">WheelsDeal </span>?
      </h1>

      <p className="text-center">
        rem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor
        incididunt ut labore et dolore magna aliq. Ut enim ad miniveniam, quis
        nostrud exercitation ullamco nisi ut aliquip ex ea 
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        mt-10 gap-5" >
        <WhyUsCard icon={icon1} title="Financing Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" />
      </div>
    </div>
  );
};

export default WhyUs;
