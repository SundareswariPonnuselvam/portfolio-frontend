import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';
import ThreeSkillsCanvas from './ThreeSkillsCanvas';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="py-24 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-30 z-0" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <ThreeSkillsCanvas />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4"
          >
            My <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical abilities and experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {skills.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold text-dark-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-dark-700"
              >
                {category.category}
              </motion.h3>

              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div key={itemIndex} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-dark-800 dark:text-dark-200 font-medium">
                        {item.name}
                      </span>
                      <span className="text-sm text-dark-500 dark:text-dark-400">
                        {item.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
