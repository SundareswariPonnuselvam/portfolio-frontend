import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

const response = await fetch('https://portfolio-backend-r2nc.onrender.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formState),
});

const result = await response.json();
console.log('LIVE RESPONSE:', result); // For debugging

if (response.ok) {
  setIsSubmitted(true);
  setFormState({ name: '', email: '', subject: '', message: '' });
  setTimeout(() => setIsSubmitted(false), 5000);
} else {
  alert(result.error || 'Something went wrong!');
}


};  



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

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-primary-500" />,
      title: 'Email',
      value: 'sundareswari2002@gmail.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: <Phone size={20} className="text-primary-500" />,
      title: 'Phone',
      value: '+91 99430 19400',
      href: 'tel:+11234567890',
    },
    {
      icon: <MapPin size={20} className="text-primary-500" />,
      title: 'Location',
      value: 'Rajapalayam, Tamil Nadu, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible" // ✅ replaces animate
          viewport={{ once: true }} // ✅ only animate once
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Get In <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-dark-600 dark:text-dark-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // ✅ replaces animate
            viewport={{ once: true }} // ✅ only animate once
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-dark-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-dark-900 dark:text-white font-medium mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dark-600 dark:text-dark-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // ✅ replaces animate
            viewport={{ once: true }} // ✅ only animate once
            className="lg:col-span-3 bg-white dark:bg-dark-800 rounded-xl p-6 md:p-8 shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <CheckCircle size={60} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-dark-600 dark:text-dark-300">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                      }`}
                  >
                    <span>Send Message</span>
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
