import React, { useState } from "react";

const Hero = () => {
  // State to track if the animation has been triggered
  const [animate, setAnimate] = useState(false);

  // Function to trigger animation on click
  const handleClick = () => {
    setAnimate(true);
    // Reset the animation after it completes
    setTimeout(() => setAnimate(false), 1000); // Duration should match the animation duration
  };

  return (
    <section
      className={`w-full h-screen text-white flex items-center justify-center bg-cover bg-center transition-transform duration-500 ${
        animate ? "animate-click" : ""
      }`}
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1662372551108-dbb3047369fd?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="container mx-auto px-6 py-16 bg-gray-800 bg-opacity-70 rounded-lg text-center transition-opacity duration-500 opacity-0 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 transform translate-y-10 opacity-0 animate-slide-up">
          Revolutionize Your Workflow with SmartFlow
        </h1>
        <p className="text-lg md:text-xl mb-6 transform translate-y-10 opacity-0 animate-slide-up animate-delay-200">
          The Ultimate Project Management Tool Designed for Efficiency and
          Collaboration.
        </p>
        <p className="mb-8 transform translate-y-10 opacity-0 animate-slide-up animate-delay-400">
          SmartFlow empowers teams to work smarter, not harder. With our
          intuitive interface and powerful features, you'll streamline your
          project management, enhance collaboration, and boost productivity.
        </p>
        <div className="transform translate-y-10 opacity-0 animate-slide-up animate-delay-600">
          <a
            href="#get-started"
            onClick={handleClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            onClick={handleClick}
            className="ml-4 text-blue-300 hover:text-blue-500 font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
