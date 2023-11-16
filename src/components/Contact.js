import React from "react";
import ContactForm from "./ContactForm";
import {BiPhone} from "react-icons/bi";

const Contact = () => {
	return (
			<section id="contact">
				<div className="container px-5 py-10 mx-auto flex flex-col justify-center items-center">
					<BiPhone className="w-10 inline-block mb-4" />
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Contact Me
					</h2>
					<ContactForm />
				</div>
			</section>
	);
};

export default Contact;
