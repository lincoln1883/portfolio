import React from "react";

const ContactDetails = () => {
	return (
		<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex  items-end justify-start relative ">
			<iframe
				width="100%"
				height="100%"
				title="map"
				className="absolute inset-0"
				frameBorder={0}
				marginHeight={0}
				marginWidth={0}
				scrolling="no"
				id="gmap_canvas"
				style={{ filter: "opasity(0.7)" }}
				src="https://maps.google.com/maps?q=discovery%20bay,jamaica&t=&z=11&ie=UTF8&iwloc=&output=embed"
			/>
			<div className=" relative flex flex-wrap py-6 rounded shadow-md bg-gray-800 bg-opacity-30">
				<div className="lg:w-1/2 px-6">
					<h2 className="title-font font-semibold text-white tracking-widest text-xs">
						ADDRESS
					</h2>
					<p className="mt-1 text-indigo-900">
						Old Folly Discovery Bay
						<br />
						St.Ann Jamaica W.I.
					</p>
				</div>
				<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
					<h2 className="title-font font-semibold text-white tracking-widest text-xs">
						EMAIL
					</h2>
					<a href="#contact" className="text-indigo-900 leading-relaxed">
						lincolngibson7@gmail.com
					</a>
					<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
						PHONE
					</h2>
					<p className="leading-relaxed text-indigo-900">1-876-898-5560</p>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
// bg-transparent
