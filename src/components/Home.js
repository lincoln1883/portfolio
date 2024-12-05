import React from "react";
import { motion } from "framer-motion";
import Image from "../img/my-image.jpg";
import Background3D from "./three/Background3D";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: AiFillGithub, url: "https://github.com/lincoln1883", label: "GitHub" },
  { icon: AiFillLinkedin, url: "https://Linkedin.com/in/lincoln-gibson", label: "LinkedIn" },
  { icon: AiFillTwitterCircle, url: "https://twitter.com/lincoln1883", label: "Twitter" },
  { icon: AiFillMediumCircle, url: "https://medium.com/@lincoln1883", label: "Medium" },
];

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Background3D />
      <div className="container mx-auto px-5 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex flex-col gap-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Hi, I'm Lincoln
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-gradient">
                Fullstack Developer
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I build web applications using React and Redux on the frontend and Ruby on Rails on the backend.
              I write clean human-readable code, enjoy remote work and pair programming.
              Challenges are part of my daily routine from algorithms to sudoku, I'm always learning new things.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-6 mt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 dark:text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <social.icon className="w-8 h-8" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 mt-6"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition-colors"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl"
              >
                <img
                  src={Image}
                  alt="Lincoln Gibson"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
