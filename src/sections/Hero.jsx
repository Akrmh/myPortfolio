import { useEffect, useRef } from "react";
import Typed from "typed.js";

const myImage = "../src/assets/٢٠١٩٠٦٢١_١٠٠٥١١.jpg";

const Hero = () => {
  const handleClick = () => {

    const contactMe = document.getElementById("contactMe");
    if (contactMe) {
      contactMe.scrollIntoView();
    }

  };

  const typedRef = useRef(null); // Reference for the typed element

  useEffect(() => {
    const options = {
      strings: ["Full-Stack Web Developer", "Creative Coder", "Problem Solver"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Cleanup the Typed instance
      typed.destroy();
    };
  }, []);
  
  return (
    <main className="bg-[#1f242d] text-white min-h-screen">
<section className="home flex flex-col md:flex-row justify-between items-center min-h-screen px-10 pt-20">
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold mb-3 animate-slideBottom">
            Hello, It&apos;s Me
          </h3>
          <h1 className="text-5xl font-bold mb-3 animate-slideRight">
            Akrmh Mohamedzain
          </h1>
          <h3 className="text-2xl font-bold mb-5 animate-slideTop">
            And I&apos;m a{" "}
            <span className="text-[#0ef]">
              <span ref={typedRef}></span>
            </span>
          </h3>
          <p className="text-lg text-gray-300 mb-5 animate-slideLeft">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            aperiam harum maxime ea magni consectetur! Expedita error earum
            sint. Adipisci expedita, non provident recusandae ipsam delectus.
            Quo officiis earum ipsa.
          </p>
          <div className="flex space-x-4 mb-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition animate-slideLeft"
            >
              <i className="bx bxl-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition animate-slideLeft"
            >
              <i className="bx bxl-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition animate-slideLeft"
            >
              <i className="bx bxl-instagram-alt text-xl"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#0ef] rounded-full hover:bg-[#0ef] hover:text-gray-900 hover:shadow-custom-glow transition animate-slideLeft"
            >
              <i className="bx bxl-linkedin text-xl"></i>
            </a>
          </div>
          <a
            href="#"
            className="inline-block py-3 px-6 bg-[#0ef] rounded-full text-gray-900 font-bold hover:shadow-custom-glow  transition animate-slideTop"
          >
            Download CV
          </a>

          <a
          onClick={handleClick}
            className="inline-block ml-10 py-3 px-6 bg-green-400 rounded-full text-gray-900 font-bold hover:shadow-custom-glow  transition animate-slideTop"
          >
            Hire Me
          </a>
        </div>
        <div className="mt-10 md:mt-0 animate-zoomIn">
          <img
            src={myImage}
            alt="Profile"
            className="w-[350px] h-[350px] md:w-[400px] md:h-[450px] rounded-[50%] shadow-custom-glow transition animate-floatImage"
          />
        </div>
  </section>
  </main>
    
  );
}

export default Hero;
