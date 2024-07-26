import React, { useState } from "react";
import "./styles.css";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <section
      className={`hero-background w-full h-screen text-white flex items-center justify-center bg-cover bg-center transition-transform duration-500 ${
        animate ? "animate-click" : ""
      }`}
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1662372551108-dbb3047369fd?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="container w-[90%] p-5  sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-16 lg:py-20 bg-gray-800 bg-opacity-60 rounded-lg text-center transition-opacity duration-500 opacity-0 animate-fade-in">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transform translate-y-10 opacity-0 animate-slide-up">
          Revolutionize Your Workflow with SmartFlow
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 transform translate-y-10 opacity-0 animate-slide-up animate-delay-200">
          The Ultimate Project Management Tool Designed for Efficiency and
          Collaboration.
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-8 transform translate-y-10 opacity-0 animate-slide-up animate-delay-400">
          SmartFlow empowers teams to work smarter, not harder. With our
          intuitive interface and powerful features, you'll streamline your
          project management, enhance collaboration, and boost productivity.
        </p>
        <div className="transform translate-y-10 opacity-0 animate-slide-up animate-delay-600">
          <a
            href="#get-started"
            onClick={handleClick}
            className="bg-blue-500 text-white px-6 py-3 mr-5 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 inline-block mb-4 md:mb-0"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            onClick={handleClick}
            className="text-blue-300 hover:text-blue-500 font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
