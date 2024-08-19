import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
// Import images
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const areas = [
    { id: 1, src: area1, alt: "Area 1" },
    { id: 2, src: area2, alt: "Area 2" },
    { id: 3, src: area3, alt: "Area 3" },
  ];

  const listings = [
    { id: 1, number: "5K", text: "ACTIVE\nLISTINGS" },
    { id: 2, number: "9K", text: "SOLID\nLISTINGS" },
    { id: 3, number: "6K", text: "CLIENTS\nWE'VE SERVED" },
  ];

  return (
    <div className={darkMode ? "dark bg-black" : "light bg-transparent"}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore Most <br /> Popular areas
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 w-full">
          {areas.map((area) => (
            <div
              key={area.id}
              data-aos="zoom-in"
              data-aos-delay="400"
              className="h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src={area.src}
                alt={area.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Error loading image for ${area.alt}:`, e);
                  e.target.src = "https://via.placeholder.com/400"; // Fallback image
                }}
              />
            </div>
          ))}
        </div>

        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6"
        >
          {listings.map((item) => (
            <div
              key={item.id}
              data-aos="slide-up"
              data-aos-delay="200"
              className="flex justify-center lg:items-center gap-8 w-full"
            >
              <h1 className='text-black text-7xl font-semibold dark:text-white'>{item.number}</h1>
              <h1 className='text-black dark:text-white whitespace-pre-line'>{item.text}</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;