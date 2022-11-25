import Card from "./Card";
import { IconContext } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Skill = () => {
  return (
    <div
      className="bg-black p-4 text-center text-white sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 sm:px-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-2 lg:px-8"
      id="skill"
    >
      <div className="col-span-3">
        <h1 className="text-2xl font-medium lg:text-4xl xl:text-5xl">Skills</h1>
        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-white" />
      </div>
      <IconContext.Provider
        value={{
          color: "black",
          size: "5em",
          style: { margin: "1em auto" },
        }}
      >
        <Card title="HTML" description="Intermediate" icon={<FaHtml5 />} />

        <Card title="CSS" description="intermediate" icon={<FaCss3Alt />} />

        <Card
          title="Tailwind CSS"
          description="Beginner, and still learning"
          icon={<SiTailwindcss />}
        />

        <Card
          title="JavaScript"
          description="Beginner, and still learning"
          icon={<SiJavascript />}
        />

        <Card
          title="ReactJs"
          description="Beginner, and still learning"
          icon={<FaReact />}
        />

        <Card title="NodeJs" description="Still learning" icon={<FaNodeJs />} />
      </IconContext.Provider>
    </div>
  );
};

export default Skill;
