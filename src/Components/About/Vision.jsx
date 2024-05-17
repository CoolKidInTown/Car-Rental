import React from "react";
import img from "../../assets/img/vision.jpg"


const Vision = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row
            items-center gap-5 mt-16">
      {/* img section  */}

      <div className="w-full md:w-2/5">
        <img src={img} alt="img" className="rounded-lg"></img>
      </div>

      {/* content section  */}

      <div className="w-full md:w-2/4 space-y-4">
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">Empowered individual to achieve sustainable mobility solutions</h2>
        <p className="text-sm lg:text-base">
          So, with this classname, you're creating a flex container with its
          children stacked vertically and centered vertically within the
          container on small screens
        </p>
        <p className="text-sm lg:text-base">
          So, with this classname, you're creating a flex container with its
          children stacked vertically and centered vertically within the
          container on small screens
        </p>
      </div>
    </div>
  );
};

export default Vision;
