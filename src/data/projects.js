import { FaFilm, FaHome, FaCalendarCheck } from "react-icons/fa";

import movie from "../images/movie.jpeg";
import bookss from "../images/bookss.jpeg";
import realstate from "../images/realstate.png";

const projects = [
  {
    id: 1,
    title: "CineBook – Movie Ticket Booking",
    description:
      "A responsive movie ticket booking website where users can explore movies, view details and go through a ticket booking interface.",
    tech: ["React.js", "JavaScript", "CSS", "HTML"],
    githubUrl: "YOUR_PROJECT_URL",
    demoUrl: "YOUR_PROJECT_URL",
    icon: FaFilm,
    image: movie,
  },

  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A responsive property listing website where users can browse property information through modern property cards.",
    tech: ["Bootstrap", "JavaScript", "CSS"],
    githubUrl: "YOUR_PROJECT_URL",
    demoUrl: "YOUR_PROJECT_URL",
    icon: FaHome,
    image: realstate,
  },

  {
    id: 3,
    title: "Book Selling Website",
    description:
      "A modern online bookstore where users can browse books, explore categories and discover their favorite books.",
    tech: ["React.js", "JavaScript", "CSS", "HTML"],
    githubUrl: "YOUR_PROJECT_URL",
    demoUrl: "YOUR_PROJECT_URL",
    icon: FaCalendarCheck,
    image: bookss,
  },
];

export default projects;
