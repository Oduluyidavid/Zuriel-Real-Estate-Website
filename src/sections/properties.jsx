import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import property1 from "../assets/images/property1.jpg";
// import property3 from "../assets/images/property3.jpg";
// import property4 from "../assets/images/property4.jpg";
// import property5 from "../assets/images/property5.jpg";
// import property6 from "../assets/images/property6.jpg";


// import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from 'react-icons/fa'
// import { MdSpaceDashboard } from 'react-icons/md'
import Aos from "aos";
import "aos/dist/aos.css";

const properties = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="container mx-auto lg:px-20 px-6 py-20 
                   flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest
          </h1>
        </div>
        {/* Properties grid starts here */}
        <div
          id="grid-box"
          className="w-full h-full flex lg:flex-row flex-col justify-between items-center gap-8"
        >
          <img
            src={property1}
            alt="Property"
            className="object-cover lg:w-1/3 w-[100%] h-[200px] rounded-lg px-4"
          />
          {/* Uncomment these for additional property images */}
          {/* <img
            src={property3}
            alt="Property 3"
            className="object-cover lg:w-1/3 w-[100%] h-[200px] rounded-lg px-4"
          />
          <img
            src={property4}
            alt="Property 4"
            className="object-cover lg:w-1/3 w-[100%] h-[200px] rounded-lg"
          />
          <img
            src={property5}
            alt="Property 5"
            className="object-cover lg:w-1/3 w-[100%] h-[200px] rounded-lg"
          />
          <img
            src={property6}
            alt="Property 6"
            className="object-cover lg:w-1/3 w-[100%] h-[200px] rounded-lg"
          /> */}
        </div>
      </section>
    </div>
  );
};

export default properties;
