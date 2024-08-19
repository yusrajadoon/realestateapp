import React, { useEffect } from 'react';
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your service icons here
import { FaHome, FaMoneyBillWave, FaGavel, FaSearchLocation, FaChartLine, FaCamera } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const servicesList = [
    { icon: FaHome, title: "Sell your home", description: "We help you sell your property quickly and at the best price." },
    { icon: FaMoneyBillWave, title: "Home loans", description: "Get the best mortgage rates and terms for your new home." },
    { icon: FaGavel, title: "Legal services", description: "Expert legal advice for all your real estate transactions." },
    { icon: FaSearchLocation, title: "Home inspection", description: "Thorough inspections to ensure your property's condition." },
    { icon: FaChartLine, title: "Evaluation", description: "Accurate property evaluations to determine fair market value." },
    { icon: FaCamera, title: "Photoshoot", description: "Professional photography to showcase your property's best features." },
  ];

  return (
    <section id='services' className={`${darkMode ? 'dark bg-gray-900' : 'light bg-gray-100'} w-full py-20`}>
      <div className="container mx-auto px-4">
        <h1 data-aos="fade-up" className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Services</h1>
        <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 dark:text-white mb-10'>Top real estate <br /> services available</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((item, index) => (
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer'>
                    <div className='p-6 rounded-full bg-red-200'>
                        <item.icon className='text-red-600 w-10 h-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
                    </div>

                    <h1 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                    <p className='text-lg text-slate-700 dark:text-white'>{item.description}</p>
                    <button className='border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white'>READ MORE</button>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Services;