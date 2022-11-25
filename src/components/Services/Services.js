import React from "react";
import Card from "./Card";
import { MdOutlineComputer } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Services = () => {
  return (
    <div
      className="my-4 p-4 text-center text-white sm:grid sm:grid-cols-3 md:p-4 lg:p-8 xl:p-12"
      id="services"
    >
      <div className="sm:my-auto">
        <h1 className="text-2xl font-medium text-black lg:text-4xl xl:text-5xl">
          Services
        </h1>
        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-black" />
      </div>
      <IconContext.Provider
        value={{
          color: "white",
          size: "5em",
          style: { margin: "1em auto" },
        }}
      >
        <Card
          icon={<MdOutlineComputer />}
          description="Implementation UI/UX design to HTML, CSS or ReactJs"
        />
        <Card icon={<RiPagesFill />} description="Make simple landing page" />
      </IconContext.Provider>
    </div>
  );
};

export default Services;
