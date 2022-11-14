import Brand from "../../assets/Brand.svg";
import { IconContext } from "react-icons";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const activeDropdown = () => {
    const dropDown = document.querySelector("#dropdown");
    dropDown.classList.toggle("hidden");
    setIcon(!icon);
  };

  return (
    <div className="flex justify-around px-2 py-4">
      <img src={Brand} alt="Brand" className="w-24" />
      <div className="md:hidden" onClick={() => activeDropdown()}>
        <IconContext.Provider value={{ size: "1.8em" }}>
          {icon ? <FaTimes /> : <FaBars />}
        </IconContext.Provider>
      </div>
      <div
        className="absolute top-16 left-0 right-0 z-10 hidden bg-white py-2 text-center md:visible md:static md:flex md:justify-between"
        id="dropdown"
      >
        <ul className="md:flex md:flex-row">
          <li className="nav-primary">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-primary">
            <a href="#skill">Skills</a>
          </li>
          <li className="nav-primary">
            <a href="#services">Services</a>
          </li>
        </ul>
        <button className="btn-primary md:hidden">
          <a href="https://wa.me/6285851645365">Contact Me</a>
        </button>
      </div>
      <button className="btn-primary hidden md:visible md:my-auto md:flex">
        <a href="https://wa.me/6285851645365">Contact Me</a>
      </button>
    </div>
  );
};

export default Navbar;
