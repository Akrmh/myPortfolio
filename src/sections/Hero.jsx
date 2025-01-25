import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "../src/assets/pic1.avif",
  "../src/assets/pic2.avif",
  "../src/assets/pic3.avif",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const typedRef = useRef(null);

  const handleClick = () => {
    const contactMe = document.getElementById("contactMe");
    if (contactMe) {
      contactMe.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Full-Stack Web Developer", "Creative Coder", "Problem Solver"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    // Automatically rotate images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#1f242d] text-white">
      <section
        className="home flex flex-col md:flex-row justify-between items-center min-h-screen px-10 pt-20"
        data-aos="fade-in"
      >
        {/* Left Section */}
        <div className="max-w-lg" data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-3">Hello, It&apos;s Me</h3>
          <h1 className="text-5xl font-bold mb-3">Akrmh Mohamedzain</h1>
          <h3 className="text-2xl font-bold mb-5">
            And I&apos;m a{" "}
            <span className="text-[#0ef]">
              <span ref={typedRef}></span>
            </span>
          </h3>
          <p className="text-lg text-gray-300 mb-5" data-aos="fade-up">
            Do you want to build an awesome website that stands out? I
            specialize in creating modern, user-friendly, and visually stunning
            web solutions tailored to your needs. Let’s turn your ideas into
            reality!
          </p>
          <div className="flex space-x-4 mb-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition"
              data-aos="zoom-in"
            >
              <i className="bx bxl-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition"
              data-aos="zoom-in"
            >
              <i className="bx bxl-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition"
              data-aos="zoom-in"
            >
              <i className="bx bxl-instagram-alt text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition"
              data-aos="zoom-in"
            >
              <i className="bx bxl-linkedin text-xl"></i>
            </a>
          </div>
          <a
            href="#"
            className="inline-block py-3 px-6 bg-[#0ef] rounded-full text-gray-900 font-bold hover:shadow-custom-glow transition"
            data-aos="fade-up"
          >
            Download CV
          </a>
          <a
            onClick={handleClick}
            className="inline-block ml-10 py-3 px-6 bg-green-400 rounded-full text-gray-900 font-bold hover:shadow-custom-glow transition"
            data-aos="fade-up"
          >
            Hire Me
          </a>
        </div>

        {/* Right Section with Rotating Images */}
        <div
          className="mt-10 md:mt-0 relative w-[350px] h-[350px] md:w-[600px] md:h-[450px] overflow-hidden border-4 border-[#0ef] shadow-custom-glow"
          data-aos="fade-left"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Work"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                index === currentImageIndex
                  ? "animate-slideRight opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
