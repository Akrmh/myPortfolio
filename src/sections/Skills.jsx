import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiSlack, SiTrello } from "react-icons/si";
import Card from "../components/Card";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animations will trigger every time the element comes into view
    });
    AOS.refresh(); // Recalculate positions for dynamically loaded content
  }, []);

  const frontEndSkills = [
    {
      skillName: "HTML",
      skillLevel: "Advanced",
      skillLevelTextColor: "text-red-700",
      skillLevelBorderColor: "border-red-700",
      skillLevelBGColor: "bg-red-100",
      skillLogo: <FaHtml5 color="red" size={40} />,
    },
    {
      skillName: "CSS",
      skillLevel: "Advanced",
      skillLevelTextColor: "text-blue-700",
      skillLevelBorderColor: "border-blue-700",
      skillLevelBGColor: "bg-blue-100",
      skillLogo: <FaCss3Alt color="blue" size={40} />,
    },
    {
      skillName: "TailwindCss",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-cyan-700",
      skillLevelBorderColor: "border-cyan-700",
      skillLevelBGColor: "bg-cyan-100",
      skillLogo: <SiTailwindcss color="cyan" size={40} />,
    },
    {
      skillName: "JavaScript",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-yellow-700",
      skillLevelBorderColor: "border-yellow-700",
      skillLevelBGColor: "bg-yellow-100",
      skillLogo: <SiJavascript size={40} className="text-yellow-500" />,
    },
    {
      skillName: "React",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-cyan-700",
      skillLevelBorderColor: "border-cyan-700",
      skillLevelBGColor: "bg-cyan-100",
      skillLogo: <SiReact size={40} className="text-cyan-700" />,
    },
    {
      skillName: "Responsiveness",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-purple-700",
      skillLevelBorderColor: "border-purple-700",
      skillLevelBGColor: "bg-purple-100",
      skillLogo: <FaMobileAlt size={40} className="text-purple-700" />,
    },
  ];

  const backEndSkills = [
    {
      skillName: "Node.js",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-green-700",
      skillLevelBorderColor: "border-green-700",
      skillLevelBGColor: "bg-green-100",
    },
    {
      skillName: "Express",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-gray-700",
      skillLevelBorderColor: "border-gray-700",
      skillLevelBGColor: "bg-gray-100",
      skillLogo: <SiExpress size={40} className="text-gray-700" />,
    },
    {
      skillName: "MongoDB",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-green-700",
      skillLevelBorderColor: "border-green-700",
      skillLevelBGColor: "bg-green-100",
      skillLogo: <SiMongodb size={40} className="text-green-700" />,
    },
    {
      skillName: "MySQL",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-blue-700",
      skillLevelBorderColor: "border-blue-700",
      skillLevelBGColor: "bg-blue-100",
      skillLogo: <SiMysql size={40} className="text-blue-700" />,
    },
  ];

  const tools = [
    {
      skillName: "Git",
      skillLevel: "Proficient",
      skillLevelTextColor: "text-orange-700",
      skillLevelBorderColor: "border-orange-700",
      skillLevelBGColor: "bg-orange-100",
      skillLogo: <SiGit size={40} className="text-orange-700" />,
    },
    {
      skillName: "GitHub",
      skillLevel: "Proficient",
      skillLevelTextColor: "text-black",
      skillLevelBorderColor: "border-black",
      skillLevelBGColor: "bg-gray-300",
      skillLogo: <SiGithub size={40} className="text-black" />,
    },
    {
      skillName: "Slack",
      skillLevel: "Proficient",
      skillLevelTextColor: "text-purple-700",
      skillLevelBorderColor: "border-purple-700",
      skillLevelBGColor: "bg-purple-100",
      skillLogo: <SiSlack size={40} className="text-purple-700" />,
    },
    {
      skillName: "Trello",
      skillLevel: "Proficient",
      skillLevelTextColor: "text-blue-700",
      skillLevelBorderColor: "border-blue-700",
      skillLevelBGColor: "bg-blue-100",
      skillLogo: <SiTrello size={40} className="text-blue-700" />,
    },
  ];

  return (
    <main className="h-[110%] flex flex-col justify-center bg-[#1f242d] text-white pt-[10%]" id="skills">
      <div className="flex flex-row justify-center gap-10">
        {/* Front-End Skills */}
        <section
          className="flex flex-col items-center max-w-5xl"
          data-aos="slide-right"
        >
          <h2 className="text-2xl font-bold mb-4">Front-End Skills</h2>
          <div className="flex flex-col gap-6">
            {frontEndSkills.map((skill) => (
              <Card
                key={skill.skillName}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                skillLevelTextColor={skill.skillLevelTextColor}
                skillLevelBorderColor={skill.skillLevelBorderColor}
                skillLevelBGColor={skill.skillLevelBGColor}
                skillLogo={skill.skillLogo}
              />
            ))}
          </div>
        </section>

        {/* Back-End Skills */}
        <section
          className="flex flex-col items-center max-w-5xl"
          data-aos="slide-up"
        >
          <h2 className="text-2xl font-bold mb-4">Back-End Skills</h2>
          <div className="flex flex-col gap-6">
            {backEndSkills.map((skill) => (
              <Card
                key={skill.skillName}
                skillName={skill.skillName}
                skillLevel={skill.skillLevel}
                skillLevelTextColor={skill.skillLevelTextColor}
                skillLevelBorderColor={skill.skillLevelBorderColor}
                skillLevelBGColor={skill.skillLevelBGColor}
                skillLogo={skill.skillLogo}
              />
            ))}
          </div>
        </section>

        {/* Tools I Use */}
        <section
          className="flex flex-col items-center max-w-5xl"
          data-aos="slide-left"
        >
          <h2 className="text-2xl font-bold mb-4">Tools I Use</h2>
          <div className="flex flex-col gap-6">
            {tools.map((tool) => (
              <Card
                key={tool.skillName}
                skillName={tool.skillName}
                skillLevel={tool.skillLevel}
                skillLevelTextColor={tool.skillLevelTextColor}
                skillLevelBorderColor={tool.skillLevelBorderColor}
                skillLevelBGColor={tool.skillLevelBGColor}
                skillLogo={tool.skillLogo}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;
