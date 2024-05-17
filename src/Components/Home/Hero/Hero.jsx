import React from "react";
import img from "../../../assets/img/hero.jpg";
//above is the source path for src in img tag ... means inside current dir

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="h-screen container flex flex-col justify-center md:flex-row items-center">
        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Ride ASAP
          </h1>
          <p className="text-lg lg:text-2xl font-medium">
            Over 1000+ New Cars Available
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            venenatis gravida tortor at imperdiet. Pellentesque auctor dolor in
            quam ultricies tristique. Vestibulum mollis turpis ex, eget
            tristique ex ultricies ac. Proin et semper odio. Suspendisse semper
            odio tincidunt ultricies gravida. Suspendisse diam nibh,
          </p>

          <div className="flex gap-8">
            <button
              className="bg-primary py-1 px-4 rounded-md hover:scale-90 
            transition duration-100 ease-linear"
            >
              Explore More
            </button>
            <button
              className="border-2 border-primary py-1 px-4 rounded-md 
            hover:bg-primary transition duration-100 ease-linear"
            >
              See Cars
            </button>
          </div>
        </div>

        {/* img section  */}
        <div className="w-full md:w-2/4 mt-4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
