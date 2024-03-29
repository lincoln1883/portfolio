import React from "react";

import { projects } from "../data";
import { BiCode } from "react-icons/bi";

const Projects = () => {
	return (
			<section id="projects" className="text-gray-400 body-font ">
				<div className="container px-5 py-10 mx-auto text-center lg:px-40">
					<div className="flex flex-col w-full mb-20">
						<BiCode className="mx-auto inline-block w-10 mb-4 " />
						<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
							Featured Projects
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Here on display are a few of the projects i am proud of building.
						</p>
					</div>
					<div className="flex justify-center items-center flex-wrap -m-4">
						{projects.map((project) => (
								<div
										key={project.image}
										className="sm:w-1/2 w-100 p-4">
									<div className="flex relative">
										<img
												alt="gallery"
												className="absolute inset-0 w-full h-full object-fit object-center rounded-lg"
												src={project.image}
										/>
										<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
											<h1 className="title-font text-lg font-medium text-white mb-3">
												{project.title}
											</h1>
											<p className="leading-relaxed">{project.description}</p>
											<div className="flex mt-2">
												<div className="">
													<div className="flex flex-wrap mt-1">
														{project.technologies.map((tech) => (
																<span
																		key={tech}
																		className="bg-gray-800 rounded-full px-2 py-1 text-sm font-semibold text-white mr-2 mb-2 mt-1">
												{tech}
											</span>
														))}
													</div>
												</div>
											</div>
											<div className="flex justify-center">
												<a href={project.link} className="flex items-center mt-4 text-white bg-green-600 border-0 py-2 px-3 focus:outline-none hover:bg-green-700 rounded" >
													Live Demo
													<svg
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															className="w-4 h-4 ml-2"
															viewBox="0 0 24 24">
														<path d="M5 12h14M12 5l7 7-7 7"></path>
													</svg>
												</a>
												<a href={project.source} className="flex items-center mt-4 text-white bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded ml-4" >
													Source Code
													<svg
															fill="none"
															stroke="currentColor"
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															className="w-4 h-4 ml-2"
															viewBox="0 0 24 24">
														<path d="M5 12h14M12 5l7 7-7 7"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Projects;
