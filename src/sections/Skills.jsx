import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiGithub, SiSlack, SiTrello } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("progress-animation");
          }
        });
      },
      { threshold: 0.5 }
    );

    const progressElements = document.querySelectorAll(".progress-line span");
    progressElements.forEach((el) => observer.observe(el));

    return () => {
      progressElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const sections = [
    {
      title: "Front-End Skills",
      skills: [
        { name: "HTML", icon: <FaHtml5 color="orange" size={30} />, progress: 90 },
        { name: "CSS", icon: <FaCss3Alt color="blue" size={30} />, progress: 85 },
        { name: "JavaScript", icon: <FaJsSquare color="yellow" size={30} />, progress: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="cyan" size={30} />, progress: 75 },
        { name: "React", icon: <FaReact color="cyan" size={30} />, progress: 70 },
      ],
    },
    {
      title: "Back-End Skills",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="green" size={30} />, progress: 75 },
        { name: "Express.js", icon: <SiExpress color="gray" size={30} />, progress: 70 },
        { name: "MongoDB", icon: <SiMongodb color="green" size={30} />, progress: 65 },
        { name: "MySQL", icon: <SiMysql color="blue" size={30} />, progress: 60 },
      ],
    },
    {
      title: "Tools I Use",
      skills: [
        { name: "Git", icon: <FaGit color="orange" size={30} />, progress: 80 },
        { name: "GitHub", icon: <SiGithub color="black" size={30} />, progress: 85 },
        { name: "Slack", icon: <SiSlack color="purple" size={30} />, progress: 75 },
        { name: "Trello", icon: <SiTrello color="blue" size={30} />, progress: 70 },
      ],
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Communication", icon: <FaReact color="cyan" size={30} />, progress: 85 },
        { name: "Problem-Solving", icon: <FaReact color="cyan" size={30} />, progress: 80 },
        { name: "Teamwork", icon: <FaReact color="cyan" size={30} />, progress: 90 },
        { name: "Time Management", icon: <FaReact color="cyan" size={30} />, progress: 85 },
      ],
    },
  ];

  return (
    <div className="font-poppins pt-20 text-white" id="skills">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-b from-[#0ef] to-white bg-clip-text text-transparent">
        My Skills
      </h1>

      {/* Skills Sections with Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-[5%] gap-[5%]">
        {sections.map((section, index) => (
         <section
         key={index}
         className="mb-16 p-4 rounded-md shadow-lg bg-glass-pattern backdrop-blur-lg border border-glassBorder"
         data-aos="fade-up"
       >
            <h2 className="text-3xl font-bold text-center mb-6">{section.title}</h2>
            <div className="flex flex-col gap-6 items-center">
              {section.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bar w-11/12 max-w-md">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="progress-line bg-gray-700 h-2 w-full mt-2 relative">
                    <span
                      className="absolute bg-gradient-to-r from-[#0ef] to-blue-300 h-2"
                      style={{ width: `${skill.progress}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
