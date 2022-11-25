import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black p-4 sm:p-8">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © 2022{" "}
          <a href="https://github.com/khafidf/" className="hover:underline">
            Eko Khafid Firmansyah
          </a>
          . All Rights Reserved.
        </span>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://www.instagram.com/khafidfrm/"
              className="text-gray-400 hover:text-gray-900"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/khafidf/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/eko-khafid-firmansyah-102b58256/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
