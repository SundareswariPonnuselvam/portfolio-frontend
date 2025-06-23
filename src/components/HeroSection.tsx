import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <motion.div
        className="absolute inset-0 z-0 flex justify-center items-center"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.img
          src="\public\img\1ts.jpg"
          alt="Tech Image"
          className="w-[400px] h-[400px] object-contain"
        />
      </motion.div>


      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full md:w-1/2 mb-12 md:mb-0"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-500 dark:text-primary-400 font-medium mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Sundareswari Ponnuselvam
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-dark-700 dark:text-dark-200 mb-6"
          >
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Software Developer
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-lg"
          >
           
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-primary-500 dark:border-primary-400 text-primary-500 dark:text-primary-400 font-medium rounded-full hover:bg-primary-500/10 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-dark-600 dark:text-dark-300 text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-dark-400 dark:border-dark-500 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
