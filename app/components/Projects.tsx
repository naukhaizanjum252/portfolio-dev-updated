"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
  sections?: { title: string; image: string; description: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Profolio - Real Estate Management Platform",
    description: "Comprehensive real estate management system",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/18/d8/96/18d89612-18ac-b84e-202d-7d4ef45337fe/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/460x0w.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Chart.js",
    ],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "A complete real estate management platform built for property agencies in Saudi Arabia. Features include staff management, credit system, property listings, analytics dashboard, and more.",
    sections: [
      {
        title: "Dashboard & Analytics",
        image: "./profolio/Dashboard.png",
        description:
          "Interactive dashboard with real-time analytics, performance metrics, and property management features.",
      },
      {
        title: "Property Management",
        image: "./profolio/post-listing.png",
        description:
          "Comprehensive property listing and management system with advanced filtering and search capabilities.",
      },
      {
        title: "Staff Management",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-localhost-3000-en-agency-staff-2025-02-24-12_38_31-j8x8K6LTtzrZyG2S9FyCrmHWCIryby.png",
        description:
          "Role-based access control and credit management system for agency staff members.",
      },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-6">
        <AnimatedSectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-400 transition-colors duration-300 inline-flex"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.h3
                    className="text-xl group-hover:text-blue-400 font-semibold mb-2 dark:text-white inline-flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <ExternalLink size={28} />
                </a>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  initial={{ x: -150 }}
                  animate={{ x: 0 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ x: -150 }}
                  animate={{ x: 0 }}
                >
                  {project.technologies.map(
                    (tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full h-[85vh] overflow-y-auto"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="inline-flex gap-4">
                    <h2 className="text-2xl font-bold dark:text-white">
                      {selectedProject.title}
                    </h2>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 transition-colors duration-300 inline-flex"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={28} />
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <Swiper
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mb-4"
                >
                  {selectedProject.sections?.map((section, index) => (
                    <SwiperSlide key={index}>
                      <h3 className="text-xl font-semibold dark:text-white mb-2">
                        {section.title}
                      </h3>

                      {/* Image Container with Hover Effect */}
                      <div className="px-4">
                        <div
                          className="relative w-full md:h-[480px] h-[230px] rounded-lg overflow-hidden group cursor-pointer "
                          onClick={() => openImage(section.image)}
                        >
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={600}
                            height={600}
                            className="w-full h-full  object-cover object-top"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-medium">
                              Click to view full image
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
                        {section.description}
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Popover/Modal */}
                {isOpen && currentImage && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    onClick={closeImage}
                  >
                    <div
                      className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-auto p-4"
                      // onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                      onClick={closeImage}
                    >
                      <Image
                        src={currentImage}
                        alt="Expanded Image"
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                      />
                      <button
                        className="absolute top-4 right-4 text-black text-2xl"
                        onClick={closeImage}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex gap-4 mt-4">
                  {/* {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Globe size={20} /> Live Preview
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Code size={20} /> GitHub Repo
                    </a>
                  )} */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
