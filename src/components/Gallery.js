import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import "./Gallery.css";

const projects = [
  {
    name: "NutriLINE",
    images: ["/images/nl1.jpg", "/images/nl2.jpg", "/images/nl3.jpg"],
    description:
      "Clarify was inspired by people who struggle with language impairments, and the extension was developed to make it a little bit easier to navigate the web.",
    github: "https://github.com/MayaOum05/nl",
  },
  {
    name: "Grid Guard",
    images: ["/images/gg1.jpg", "/images/gg2.jpg", "/images/gg3.jpg"],
    description:
      "GridGuard predicts potential power outages by county using a trained scikit-learn model. Users can easily see which areas have stable, unstable, or critical grids, helping them plan and prepare before an upcoming event.",
    github: "https://github.com/yourusername/weather-dashboard",
  },
  {
    name: "Clarify",
    images: ["/images/c2.jpg", "/images/c1.jpg", "/images/c3.jpg", "/images/c4.jpg"],
    description:
      "Personal portfolio site built with React, Tailwind CSS, and Framer Motion for smooth transitions.",
    github: "https://github.com/yourusername/portfolio",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const project = projects[current];
  const totalProjects = projects.length;

  const nextProject = () => {
    setCurrent((current + 1) % totalProjects);
    setImageIndex(0);
  };

  const prevProject = () => {
    setCurrent((current - 1 + totalProjects) % totalProjects);
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((imageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setImageIndex((imageIndex - 1 + project.images.length) % project.images.length);
  };

  // 🕒 Auto-slide every 5 seconds (paused when hovered)
  useEffect(() => {
    if (isHovered) return; // don’t auto-slide while user is hovering
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project, isHovered]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">

      <h2 className="gal-txt">Project Gallery</h2>
      <div
        className="overflow-hidden shadow-lg rounded-2xl bg-white gallery-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-72 bg-gray-200 flex items-center justify-center">
          <motion.img
            key={imageIndex}
            src={project.images[imageIndex]}
            alt={project.name}
            className="object-contain h-full w-full rounded-lg gallery-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Image controls */}
          <button onClick={prevImage} className="absolute left-2 nav-btn rounded-full p-2">
            <ChevronLeft />
          </button>
          <button onClick={nextImage} className="absolute right-2 nav-btn rounded-full p-2">
            <ChevronRight />
          </button>
        </div>

        <div className="p-4 space-y-2 text-center">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p className="text-gray-600 text-sm">{project.description}</p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <Github className="w-4 h-4 mr-1" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project controls */}
      <div className="flex justify-center space-x-2">
        <button
          onClick={prevProject}
          className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
        >
          Previous Project
        </button>
        <button
          onClick={nextProject}
          className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
        >
          Next Project
        </button>
      </div>
    </div>
  );
}
