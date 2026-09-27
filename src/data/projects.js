import {
  FaFilm,
  FaHome,
  FaBook,
  FaBriefcase,
  FaWallet,
} from "react-icons/fa";

import movie from "../images/tickertdada.jpeg";
import bookss from "../images/bookss.jpeg";
import realstate from "../images/realstate.png";
import jobportal from "../images/jobportal.jpeg";
import expenses from "../images/expensetraker.png"

const projects = [
  {
    id: 1,
    title: "CineBook – Movie Ticket Booking",
    description:
      "A responsive movie ticket booking platform where users can explore movies, view movie details, select showtimes, make demo payments, and manage their bookings.",
    tech: ["React.js", "JavaScript", "React Router", "CSS", "HTML"],
    githubUrl: "https://github.com/shubhamkamble18/moviebooking",
    demoUrl: "https://ticketdada.netlify.app/",
    icon: FaFilm,
    image: movie,
  },

  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A responsive real estate website that allows users to explore property listings through modern property cards with a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/shubhamkamble18/real_estate",
    demoUrl: "https://shubhamkamble18.github.io/real_estate/",
    icon: FaHome,
    image: realstate,
  },

  {
    id: 3,
    title: "Book Selling Website",
    description:
      "A modern online bookstore where users can browse books, explore different categories, view book information, and discover their favorite titles.",
    tech: ["React.js", "JavaScript", "CSS", "HTML" ,"python","Flask"],
    githubUrl: "YOUR_PROJECT_URL",
    demoUrl: "YOUR_PROJECT_URL",
    icon: FaBook,
    image: bookss,
  },

  {
    id: 4,
    title: "Job Portal",
    description:
      "A responsive job portal interface where users can explore job opportunities, search for positions, and view job information through a clean and organized layout.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://shubhamkamble18.github.io/job_portal-/",
    demoUrl: "https://shubhamkamble18.github.io/job_portal-/",
    icon: FaBriefcase,
    image: jobportal,
  },

  {
    id: 5,
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking application that helps users manage their expenses, track transactions, and organize financial records through a simple interface.",
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Python",
      "Flask",
    ],
    githubUrl: "https://github.com/shubhamkamble18/exptraker",
    demoUrl: "https://expense-tracker-app-6y3g.onrender.com",
    icon: FaWallet,
    image: expenses,
  },
];

export default projects;