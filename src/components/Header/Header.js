import Me from "../../assets/Me.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="bg-black p-12 text-white sm:grid sm:grid-cols-3 sm:gap-4">
      <div className="flex flex-col sm:col-start-1 sm:self-center sm:p-6 md:p-16 xxl:p-8">
        <p className="text-2xl font-bold sm:text-base lg:text-2xl xxl:text-4xl">
          Hi👋
          <br />
          I'm Eko Khafid Firmansyah
          <br />
          <span className="text-sm opacity-80 sm:text-left sm:text-xs lg:text-sm xxl:text-base">
            Front-End Developer
          </span>
        </p>
      </div>
      <div className="mt-1 pb-10 sm:col-start-3 sm:self-center sm:pb-0 md:p-8">
        <p className="text-lg sm:p-6 sm:text-xs lg:text-base xxl:text-xl">
          I'm a web developer with experience for 1 years. My expertise is to
          create website design and create a simple landing page and many
          more...
        </p>
      </div>
      <div className="sm:col-start-2 sm:row-start-1">
        <img
          src={Me}
          alt="Foto Khafid"
          className="mx-auto rounded-full border-2 bg-white"
        />
      </div>
      <IconContext.Provider value={{ size: "1.8em" }}>
        <div className="flex justify-around pt-10 sm:col-start-2">
          <a
            className="hover:scale-105"
            href="https://www.instagram.com/khafidfrm/"
          >
            <FaInstagram />
          </a>
          <a className="hover:scale-105" href="https://github.com/khafidf/">
            <FaGithub />
          </a>
          <a
            className="hover:scale-105"
            href="https://www.linkedin.com/in/eko-khafid-firmansyah-102b58256/"
          >
            <FaLinkedin />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
