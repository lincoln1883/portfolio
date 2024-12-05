import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCode } from "react-icons/bi";
import Project from "./Project";
import ProjectSkeleton from "./ProjectSkeleton";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
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
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white mb-4">
            Projects
            <BiCode className="mx-auto text-primary-500 w-8 inline-block ml-2" />
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 dark:text-gray-400">
            Here are some of my featured projects. Each one is crafted with attention to detail and modern best practices.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectSkeleton key={i} />
              ))}
            </motion.div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-red-500 p-8 bg-red-500/10 rounded-lg"
            >
              <p>Failed to load projects. Please try again later.</p>
              <p className="text-sm mt-2 text-gray-400">{error}</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <Project key={project.name} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
