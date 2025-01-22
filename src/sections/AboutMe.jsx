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
      className="bg-[#1f242d] text-white flex items-center justify-center pt-[5vh] z-0"
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
            Hi, I&apos;m Akrmh Mohamedzain, a passionate Full-Stack Web Developer
            with a love for creating intuitive and engaging user experiences.
            With expertise in both front-end and back-end technologies, I focus
            on building scalable and efficient applications. I enjoy solving
            complex problems and learning new technologies to stay on top of
            industry trends.
            <br />
            <br />
            When I&apos;m not coding, I love exploring creative coding projects and
            enhancing my skills through real-world practice. My goal is to build
            solutions that not only meet business requirements but also offer
            seamless interactions for users. Let&apos;s collaborate and create
            something amazing!
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
