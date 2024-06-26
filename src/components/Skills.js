import React from "react";
import { BiChip } from "react-icons/bi";
import { skills } from "../data";

const Skills = () => {
	return (
		<section id="skills">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<BiChip className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Skills &amp; Technologies
					</h1>
					<p className="text-center leading-relaxed xl:w-2/4 lg:3/4 mx-auto">
						These are the technologies have been learning, and applying to the
						projects.
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{skills.map((skill, index) => (
						<div key={index} className="p-2 sm:w-1/2 w-full">
							<div className="bg-gray-800 rounded flex p-4 h-full items-center">
								<img src={skill.icon} alt="" className="w-6 h-6 flex-shrink-0 mr-4"/>
								<span className="title-font font-medium text-white">
									{skill.title}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
