// src/data/projects.ts
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce with Subscription",
    shortDescription: "Subscription-based e-commerce platform with smart search and personalization.",
    description: `Developed a robust e-commerce platform supporting subscriptions with advanced product search, filtering, and pagination. Used PySpark to process large-scale customer data to improve recommendations and user personalization.`,
    image: "dist/assets/ecommerce front page.png",
    technologies: ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "MySQL", "PySpark"],
    features: [
      "Advanced product filtering and pagination",
      "Customer behavior-based recommendations",
      "Subscription-based checkout system"
    ],
    challenges: "Processing large volumes of user and transaction data efficiently using PySpark and ensuring real-time responsiveness.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "HR Management System",
    shortDescription: "Automated HR platform with performance analytics and smart leave workflows.",
    description: `Built a data-driven HR platform to streamline leave requests, approvals, and performance tracking. Leveraged PySpark for analytics and trend identification to support HR decision-making.`,
    image: "dist/assets/hrmanagement.png",
    technologies: ["Laravel", "MySQL", "PySpark"],
    features: [
      "Automated leave tracking and approval",
      "Performance analysis dashboard",
      "Data-driven reporting"
    ],
    challenges: "Designing scalable back-end processes and integrating PySpark analytics with Laravel UI components.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "24-Rides Customer App", 
    shortDescription: "Mobile app for ride booking with real-time tracking.",
    description: `Designed and optimized the 24-Rides customer app interface, ensuring smooth usability. Integrated real-time tracking using Google Maps for accurate navigation.`,
    image: "dist/assets/auto booking image.png",
    technologies: ["React Native", "Redux", "JavaScript"],
    features: [
      "Real-time ride tracking",
      "Optimized UI for performance",
      "User-friendly booking flow"
    ],
    challenges: "Ensuring smooth GPS tracking and seamless UI transitions across devices.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Cinema Ticket Booking App",
    shortDescription: "Mobile app for booking movie tickets with real-time seat updates.",
    description: `Built a ticket booking app that allows users to view and book available movie seats in real time. Streamlined booking flow to improve overall experience.`,
    image: "/images/cinema-booking.jpg",
    technologies: ["React Native", "JavaScript"],
    features: [
      "Live seat availability",
      "Smooth booking interface",
      "Real-time updates on show schedules"
    ],
    challenges: "Handling dynamic updates in high-demand scenarios without disrupting user flow.",
    liveUrl: "#",
    githubUrl: "#",
  },
];
