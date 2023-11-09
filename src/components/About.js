import React from "react";

import Image from "../img/IMG_2.jpg";

const About = () => {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg: flex-grow md:w-1.5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Lincoln
						<br className=" hidden lg:inline-block" /> Fullstack Developer.
					</h1>
					<p className="mb-8 leading-relaxed">
						I'm a skilled full-stack developer dedicated to writing clean code, crafting accessible designs, and excelling in remote work environments. Expertise in building web applications shines through mastery of React and Ruby on Rails. Communicates effectively, ensuring seamless collaboration with colleagues, clients, and stakeholders. Demonstrates exceptional problem-solving skills, tackling both technical challenges and project management complexities.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white  border-0 py-2 px-6 focus: outline-none 
            hover: bg-green-600 rounded text-lg">
							Contact Me
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
							See My Projects
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded-xl"
						alt="hero"
						src={Image}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
