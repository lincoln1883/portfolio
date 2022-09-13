import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
	return (
		<header className="bg-gray-800 md:sticky top-0 z-10">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a
					href="#about"
					className="title-font font-medium text-white mb-4 md:mb-0">
					<span className="ml-3 text-xl">LINCOLN GIBSON</span>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
					<a href="#projects" className="mr-5 hover:text-white">
						Projects
					</a>
					<a href="#skills" className="mr-5 hover:text-white">
						Skills
					</a>
				</nav>
				<a
					href="https://github.com"
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:4 md:mt-0">
					<AiFillGithub className="w-6 h-6 ml-1" />
				</a>
				<a
					href="https://Linkedin.com"
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:4 md:mt-0">
					<AiFillLinkedin className="w-6 h-6 ml-1" />
				</a>
				<a
					href="#contact"
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:4 md:mt-0">
					Contact Me
					<AiFillMessage className="w-4 h-4 ml-1" />
				</a>
			</div>
		</header>
	);
};

export default Navbar;
