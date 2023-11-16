import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuHandler = () => {
		setMenuOpen(!menuOpen);
	};

	return (
			<header className="bg-gray-800 flex flex-wrap items-center justify-evenly">
				<div className="container px-4 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
					<div className="w-full relative">
						<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 rounded">
							<div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
								<div className="w-full relative flex justify-between lg:w-auto px-1 lg:static lg:block lg:justify-start">
									<a
											className="text-lg font-bold leading-relaxed inline-block mr-1 py-2 whitespace-nowrap uppercase text-white"
											href="#home">
										LINCOLN GIBSON
									</a>
									<button
											className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none ml-10"
											type="button"
											onClick={toggleMenuHandler}>
										<AiOutlineMenu />
									</button>
								</div>
								<div
										className={
												"lg:flex flex-grow items-center" +
												(menuOpen ? " flex" : " hidden")
										}
										id="example-navbar-info">
									<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
										<li className="nav-item">
											<a
													className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
													href="#projects">
												Projects
											</a>
										</li>
										<li className="nav-item">
											<a
													className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
													href="#skills">
												Skills
											</a>
										</li>
										<li className="nav-item">
											<a
													className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
													href="#contact">
												Contact
											</a>
										</li>
										<li className="nav-item">
											<a
													className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
													href="#about">
												About
											</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>
	);
};

export default Navbar;
