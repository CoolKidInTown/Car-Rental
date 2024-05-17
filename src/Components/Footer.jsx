import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="mt-14 bg-secondary text-white">
        <div
          className="flex flex-col md:flex-row justify-between
            p-8 lg:px-28 md:px-16 px-5"
        >
          <div className="w-full md:w-1/4">
            <h1 className="font-semibold text-2xl pb-4">WheelsDeal</h1>
            <p className="mb-2  mr-5 text-sm">
              So, with this classname, you're creating a flex container with its
              children stacked vertically and centered vertically within the
              container on small screens. On medium-sized scree
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Pages Links</h1>
            <div className="flex flex-col gap-2 font-medium">
              {/* Links */}

              <Link
                to="/about"
                className="hover:translate-x-3 transition duration-200 ease-linear"
              >
                About Us
              </Link>
              <Link
                to="/cars"
                className="hover:translate-x-3 transition duration-200 ease-linear"
              >
                Our Cars
              </Link>
              <Link
                to="/services"
                className="hover:translate-x-3 transition duration-200 ease-linear"
              >
                Services
              </Link>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Used Cars for Sale</h1>
            <div>
              <Link
                to="/"
                className="hover:bg-primary transition duration-200 ease-linear mr-4"
              >
                Toyota Camry
              </Link>
              <Link
                to="/"
                className="hover:bg-primary transition duration-200 ease-linear mr-4"
              >
                Chevrolet Corvette
              </Link>
              <Link
                to="/"
                className="hover:bg-primary transition duration-200 ease-linear mr-4"
              >
                Volkwagen Golf
              </Link>
              <Link
                to="/"
                className="hover:bg-primary transition duration-200 ease-linear mr-4"
              >
                Nissan Rogue
              </Link>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Learn More</h1>
            <div className="flex flex-col gap-2 font-medium">
              <Link
                to="/"
                className="hover:translate-x-3 transition duration-200 ease-linear mr-4"
              >
                User-friendly
              </Link>
              <Link
                to="/"
                className="hover:translate-x-3 transition duration-200 ease-linear mr-4"
              >
                Search and Filters
              </Link>
              <Link
                to="/"
                className="hover:translate-x-3 transition duration-200 ease-linear mr-4"
              >
                Secure Payment
              </Link>
              <Link
                to="/"
                className="hover:translate-x-3 transition duration-200 ease-linear mr-4"
              >
                Geolocation Services
              </Link>
            </div>
          </div>
          <div>
            <p className="text-center py-4">
              @copyright developed by  <br></br>
              <span className="text-primary font-semibold mx-2"> Vedagya Sharma™</span>
                |  All rights reserved 
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
