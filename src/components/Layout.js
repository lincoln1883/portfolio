import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CustomCursor = () => {
  const { cursorPosition } = useTheme();
  
  return (
    <motion.div
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: cursorPosition.x - 12,
        y: cursorPosition.y - 12,
        scale: 1,
        opacity: 1
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-full h-full bg-white rounded-full" />
    </motion.div>
  );
};

const Layout = () => {
  const { isDarkMode, cursorPosition } = useTheme();

  useEffect(() => {
    // Initialize scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  useEffect(() => {
    // Update the document class when theme changes
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={isDarkMode ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`relative min-h-screen transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        <CustomCursor />
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
};

export default Layout;