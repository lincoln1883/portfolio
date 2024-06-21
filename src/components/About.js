import React from "react";
import {BiImage} from "react-icons/bi";

const About = () => {
	return (
		<section id="about">
			<div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
				<BiImage className="w-10 inline-block mb-4" />
				<h2 className="text-white sm:text-4xl text-3xl font-medium title-font">
				About Me
			  </h2>
				<div className="bg-gray-900 max-w-2xl rounded-lg p-4 sm:p-10 flex items-center justify-center">
					<p className="mt-1 leading-relaxed md:text-2xl">
						A dedicated professional with over a decade of experience in the hospitality industry,
						I have transitioned my strong work ethic and commitment to excellence into a thriving career as a software developer,
						specializing in remote development. I have a passion for coding, a love for watching sports,
						and a knack for video games, making my journey in technology both purposeful and personally fulfilling.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
