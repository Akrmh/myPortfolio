import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const myImage = "../src/assets/٢٠١٩٠٦٢١_١٠٠٥١١.jpg";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <main
      id="aboutMe"
      className="bg-[#1f242d] min-w-full text-white flex items-center justify-center pt-[5vh] z-0"
    >
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center h-[100vh] rounded-[50px] py-10 px-10 md:px-24 relative z-0 space-x-5">
        {/* Left Section (Text) */}
        <div
          className="flex flex-col justify-center items-start space-y-6 w-full md:w-2/3"
          data-aos="fade-right"
        >
          {/* Title */}
          <h1 className="font-extrabold text-4xl text-center md:text-left text-[#0ef]">
            About Me
          </h1>

          {/* About Description */}
          <p className="text-justify text-lg text-gray-300 w-full max-w-3xl md:mx-0">
            Hi, I&apos;m Akrmh Mohamedzain, a passionate Full-Stack Web Developer with a focus on creating modern, scalable web applications. 
            I have experience with both front-end and back-end technologies, allowing me to build dynamic user experiences from start to finish. 
            My goal is to solve real-world problems through code and deliver efficient, high-quality solutions. 
            Let&apos;s collaborate and build something awesome together!
          </p>
        </div>

        {/* Right Section (Image) */}
        <div
          className="mt-10 md:mt-0 md:relative"
          data-aos="fade-left"
        >
          <img
            src={myImage}
            alt="Akrmh Mohamedzain's Profile Picture"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-[#0ef] shadow-custom-glow transition"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
