import React from "react";
import Image from "../img/IMG_2.jpg";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillMediumCircle,
	AiFillTwitterCircle
} from "react-icons/ai";

const Home = () => {
	return (
		<section id="home">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg: flex-grow md:w-1.5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Lincoln
						<br className=" hidden lg:inline-block" /> Fullstack Developer.
					</h1>
					<p className="mb-8 leading-relaxed">
						I build web applications using React, and Redux on the frontend and Ruby on Rails on the backend.
						I write clean human readable code, enjoy remote work and pair programming.
						Challenges are apart of my daily routine from algorithms to sudoku, I'm always learning new things.
						You can find me relaxing on the beach, or playing video games in my free time.
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
					<ul className="flex justify-center gap-1 mt-6">
						<li>
							<a
								href="https://github.com/lincoln1883"
								className="inline-flex items-center border-0 py-1 focus:outline-none rounded text-base mt-4 md:4 md:mt-0">
								<AiFillGithub className="w-8 h-8 ml-1" />
							</a>
						</li>
						<li>
							<a
								href="https://Linkedin.com/in/lincoln-gibson"
							  className="inline-flex items-center border-0 py-1 focus:outline-none rounded text-base mt-4 md:4 md:mt-0">
								<AiFillLinkedin className="w-8 h-8 ml-1" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/lincoln1883"
								 className="inline-flex items-center border-0 py-1 focus:outline-none rounded text-base mt-4 md:4 md:mt-0">
									<AiFillTwitterCircle className="w-8 h-8 ml-1" />
							</a>
						</li>
						<li>
							<a href="https://medium.com/@lincoln1883"
								className="inline-flex items-center border-0 py-1 focus:outline-none rounded text-base mt-4 md:4 md:mt-0">
								<AiFillMediumCircle className="w-8 h-8 ml-1" />
							</a>
						</li>
					</ul>
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

export default Home;
