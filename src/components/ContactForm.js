import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
	const [state, submitHandler] = useForm("mvodnpzy");
	if (state. succeeded) {
		return <p>Email was Successfully sent!</p>;
	}

	return (
		<form
			onSubmit={submitHandler}
			name="contact"
			className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
			<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
				Contact Me
			</h2>
			<div className="relative mb-4">
				<label htmlFor="name" className="leading-7 text-sm text-gray-400">
					Name
				</label>
				<input
					type="name"
					id="name"
					name="name"
					required
					placeholder="Your name"
					className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-bg-indigo-900 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out"
				/>
				<ValidationError prefix="Name" field="name" errors={state.errors} />
			</div>
			<div className="relative mb-4">
				<label htmlFor=" email" className="leading-7 text-sm text-gray-400">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="Your email"
					className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-bg-indigo-900 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out"
				/>
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div className="relative mb-4">
				<label htmlFor="message" className="leading-7 text-sm text-gray-400">
					Message
				</label>
				<textarea
					type="text"
					id="message"
					name="message"
					required
					placeholder="Enter your message"
					className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<button
				type="submit"
				disabled={state.submitting}
				className="text-white bg-indigo-500 border-0 py-2 px-6 focus: rounded text-lg outline-none hover:bg-indigo-600">
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
