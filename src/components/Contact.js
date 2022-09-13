import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<ContactDetails />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
