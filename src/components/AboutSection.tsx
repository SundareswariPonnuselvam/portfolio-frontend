import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const timelineItems = [
  {
    year: '2019 - 2023',
    title: 'B.E. in Computer Science and Engineering (Data Science)',
    organization: 'Annamalai University',
    description: 'Graduated with GPA of 8.3/10. Specialized in Data Science and computational problem solving.',
    icon: <GraduationCap size={20} />,
  },
  {
    year: 'Dec 2023 - Apr 2024',
    title: 'Software Intern',
    organization: 'Velozion Technologies Pvt Ltd, Bengaluru',
    description:
      'Contributed to initial development of e-commerce and HR systems. Gained hands-on experience with Laravel, MySQL, and React Native in a collaborative setting.',
    icon: <Briefcase size={20} />,
  },
  {
    year: 'May 2024 - Dec 2024',
    title: 'Software Trainee',
    organization: 'Velozion Technologies Pvt Ltd, Bengaluru',
    description:
      'Created scalable platforms using Laravel, MySQL, and PySpark. Optimized interfaces, enhanced communication with AJAX/Redux, and implemented real-time features.',
    icon: <Briefcase size={20} />,
  },
  
  
];


  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-950">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-dark-600 dark:text-dark-300">
              My journey, experience, and the story behind my work.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16 bg-white dark:bg-dark-800 rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
              My Story
            </h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              I’m a software trainee and creative developer with a passion for building scalable platforms and intuitive
              interfaces. My work combines backend logic and frontend flair, delivering practical, high-performance solutions.
            </p>
            <p className="text-dark-700 dark:text-dark-300">
              I specialize in Laravel, React Native, and PySpark, with a keen interest in data-driven features and
              cross-platform applications. I thrive in collaborative, agile environments and enjoy turning complex
              requirements into streamlined experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-8 text-center">
              My Journey
            </h3>

            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full hidden sm:block"></div>

              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center justify-center sm:justify-start">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                        {item.icon}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-md flex-1">
                      <div className="text-primary-500 dark:text-primary-400 flex items-center gap-2 mb-2">
                        <Calendar size={16} />
                        <span>{item.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <div className="text-sm text-dark-500 dark:text-dark-400 mb-3">
                        {item.organization}
                      </div>
                      <p className="text-dark-700 dark:text-dark-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
