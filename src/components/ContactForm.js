import React from "react";
import {BiPhone} from "react-icons/bi";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, submitHandler] = useForm("mvodnpzy");
  if (state.succeeded) {
    return <p>Email was Successfully sent!</p>;
  }

  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white mb-4">
            Contact Me
						<BiPhone className="w-8 inline-block ml-2" />
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 dark:text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          name="contact"
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary-500 h-32"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
