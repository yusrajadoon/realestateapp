import React, { useEffect } from 'react'; // Added useEffect import
import aboutimg from '../assets/images/about.jpg';
import { useDarkMode } from "../components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
    <section
      id='about'
      className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className='rounded-2xl lg:w-[500px] lg:h-[600px]'
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-red-500 dark:text-white font-bold'>WHO WE ARE.</h1>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Lorem ipsum dolor, sit amet consectetur</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-xl text-gray-600 dark:text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus veniam adipisci asperiores unde quidem. Eveniet beatae tempora eligendi possimus, fugit dicta quas, deserunt obcaecati fuga unde ipsa non facere quae incidunt corporis, aliquid voluptas repudiandae est omnis aut deleniti.</p>
        <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white
               font-semifold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
                READ MORE</button>
      </div>
    </section>
  );
};

export default About;