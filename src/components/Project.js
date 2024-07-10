import React from 'react'

const Project = ({ project}) => {
  return (
    <div className="p-2 sm:p-4">
      <div className="flex relative h-[100%]">
        <div className="px-2 sm:px-4 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-white mb-3 capitalize">
            {project.name}
          </h1>
          <p className="leading-relaxed line-clamp-1 text-left">{project.description}</p>
          <div className="flex mt-2">
            <div className="w-[100%]">
              <div className="flex flex-wrap mt-1">
                {project.languages.nodes.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 rounded-full px-2 py-1 text-sm font-semibold text-white mr-2 mb-2 mt-1"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <a
              rel="noreferrer"
              target="_blank"
              href={project.homepageUrl}
              className="flex items-center mt-4 text-white bg-green-600 border-0 py-2 px-3 focus:outline-none hover:bg-green-700 rounded"
            >
              Live Demo
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a
              href={project.url}
              rel="noreferrer"
              target="_blank"
              className="flex items-center mt-4 text-white bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded"
            >
              Source Code
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project