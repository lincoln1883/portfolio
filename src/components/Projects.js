import React, {useEffect, useState} from "react";
import { BiCode } from "react-icons/bi";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function get_repo() {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `{
              user(login: "lincoln1883") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      url
                      homepageUrl
                      languages(first: 4) {
                        nodes {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }`
          })
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned an error: ${response.statusText}`);
        }

        const data = await response.json();
        const repoData = data.data.user.pinnedItems.nodes;
        setProjects(repoData);
        console.log(repoData);
      } catch (err) {
        console.error("It was not possible to get the pinned repositories from GitHub", err);
      }
    }

    get_repo();
    setLoading(false);
  }, []);

  return (
    <section id="projects" className="text-gray-400 body-font ">
      <div className="container px-4 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <BiCode className="mx-auto inline-block w-10 mb-4 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Featured Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here on display are a few of the projects i am proud of building.
          </p>
        </div>
        {loading && <p>Loading...</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1 ">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
