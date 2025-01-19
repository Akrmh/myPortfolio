import { FaHtml5, FaCss3Alt, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import Card from "../components/Card";


const Skills = () => {
  const skills = [
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
      skillLogo: <FaCss3Alt color="blue" size={40} />
    },
    {
      skillName: "TailwindCss",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-cyan-700",
      skillLevelBorderColor: "border-cyan-700",
      skillLevelBGColor: "bg-cyan-100",
      skillLogo: <SiTailwindcss color="cyan" size={40} />
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
      skillName: "Responsiveness",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-purple-700",
      skillLevelBorderColor: "border-purple-700",
      skillLevelBGColor: "bg-purple-100",
      skillLogo: <FaMobileAlt size={40} className="text-purple-700" />,
    },
    {
      skillName: "React",
      skillLevel: "Intermediate",
      skillLevelTextColor: "text-cyan-700",
      skillLevelBorderColor: "border-cyan-700",
      skillLevelBGColor: "bg-cyan-100",
      skillLogo:  <SiReact size={40} className="text-cyan-700" />,
    },
  ];

  return (
    <main className="h-screen flex flex-wrap justify-center bg-[#1f242d] text-white" id="skills">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 pt-[20vh]">
        {skills.map((skill) => (
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
    </main>
  );
};

export default Skills;
