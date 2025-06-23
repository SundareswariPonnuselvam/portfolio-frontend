import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const imageControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Zoom in
      await imageControls.start({ scale: 1.2, transition: { duration: 1 } });

      // Zoom out
      await imageControls.start({ scale: 1, transition: { duration: 1 } });

      // Start gentle dance loop
      imageControls.start({
        scale: [1, 1.03, 1],
        y: [0, -10, 0, 10, 0],
        rotate: [0, 2, 0, -2, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    };

    sequence();
  }, [imageControls]);

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
      <div className="container mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Text */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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

        {/* Right side: Animated Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/img/1ts.jpg"
            alt="Tech Image"
            className="w-[300px] md:w-[400px] h-auto object-contain"
            initial={{ scale: 1 }}
            animate={imageControls}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
