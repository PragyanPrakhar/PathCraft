import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import Logo from "./Logo";
const Footer = () => {
    return (
        <footer className="text-gray-400 bg-black body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <Logo />
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    Craft Your Learning Journey
                </p>
                <span className="inline-flex justify-center sm:ml-auto sm:mt-0 mt-4 gap-2 sm:justify-start">
                    <a
                        href="https://www.instagram.com/pragyanprakhar"
                        target="_blank"
                    >
                        <IoLogoInstagram className="w-8 h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pragyan-prakhar-b4185b216/"
                        target="_blank"
                    >
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a href="https://github.com/PragyanPrakhar" target="_blank">
                        <FaGithub className="w-8 h-8" />
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
