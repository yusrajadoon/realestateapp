import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";

// Define the property array or import it from somewhere
const property = [
  {
    images: prop1,
    address: "123 Main St",
    name: "Cozy Apartment",
    price: "$250,000",
    about: "A beautiful apartment in the city center",
    bath: 2,
    bed: 3,
    area: 1200,
    owner: "John Doe",
  },
  {
    images: prop2,
    address: "456 Elm St",
    name: "Spacious House",
    price: "$450,000",
    about: "A large family home with a garden",
    bath: 3,
    bed: 4,
    area: 2000,
    owner: "Jane Smith",
  },
  {
    images: prop3,
    address: "789 Oak St",
    name: "Modern Condo",
    price: "$350,000",
    about: "A sleek condo with city views",
    bath: 2,
    bed: 2,
    area: 1000,
    owner: "Mike Johnson",
  },
  {
    images: prop4,
    address: "101 Pine St",
    name: "Rustic Cabin",
    price: "$200,000",
    about: "A cozy cabin in the woods",
    bath: 1,
    bed: 2,
    area: 800,
    owner: "Sarah Brown",
  },
  {
    images: prop5,
    address: "202 Maple St",
    name: "Luxury Villa",
    price: "$750,000",
    about: "An elegant villa with a pool",
    bath: 4,
    bed: 5,
    area: 3000,
    owner: "David Wilson",
  },
  {
    images: prop6,
    address: "303 Cedar St",
    name: "Charming Cottage",
    price: "$180,000",
    about: "A quaint cottage with a picket fence",
    bath: 1,
    bed: 2,
    area: 900,
    owner: "Emily Davis",
  },
];

const Properties = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the latest properties
          </h1>
        </div>

        {/* property grid starts from here */}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl w-full"
            >
              <div
                id="image-box"
                className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                style={{
                  backgroundImage: `url(${item.images})`,
                }}
              >
                <div id="top" className="flex justify-between items-end w-full">
                  <div>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Featured
                    </button>
                  </div>

                  <div className="flex justify-between items-center gap-3">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Sales
                    </button>
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Active
                    </button>
                  </div>
                </div>
                <div
                  id="bottom"
                  className="flex justify-between items-end w-full"
                >
                  <div className="flex justify-start items-center gap-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-white" />
                    <h1 className="text-white">{item.address}</h1>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <FaVideo className="w-4 h-4 text-white" />
                    <FaCamera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                <h1 className="text-xl text-black font-semibold dark:text-white">
                  {item.name}
                </h1>
                <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                  {item.price}
                </h1>
                <p className="dark:text-white">{item.about}</p>
                <div
                  id="icons"
                  className="flex justify-center items-start gap-4"
                >
                  <div className="flex items-center gap-1">
                    <FaBath className="w-5 h-5 text-red-400" />
                    <h1 className="dark:text-white">{item.bath}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBed className="w-5 h-5 text-red-400" />
                    <h1 className="dark:text-white">{item.bed}</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdSpaceDashboard className="w-5 h-5 text-red-400" />
                    <h1 className="dark:text-white">{item.area} sqft</h1>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-200 mt-8"></div>

                <div
                  id="owner-info"
                  className="flex justify-between items-center w-full mt-2"
                >
                  <div className="flex justify-center items-center gap-2">
                    <FaUserCircle className="w-5 h-5 text-red-400" />
                    <h1 className="dark:text-white">{item.owner}</h1>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform duration-300">
                      <FaShareAlt className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform duration-300">
                      <FaHeart className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform duration-300">
                      <FaPlus className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;