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
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  iconSize?: number;
  githubUrl?: string;
  details: string;
  sections?: {
    title: string;
    image: string;
    description: string | React.ReactElement<any, any>;
  }[];
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
      "Swiper.Js",
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
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8 ">
            An <strong>interactive dashboard</strong> featuring{" "}
            <strong>real-time analytics</strong> and{" "}
            <strong>performance metrics</strong>. Built with dynamic data
            visualization libraries, this section offers insights into property
            listings, user engagement, and financial statistics. Fully
            responsive and optimized for seamless user experience.
          </p>
        ),
      },
      {
        title: "Localized Dashboard View",
        image: "./profolio/Localised View of Dashboard.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A <strong>localized view</strong> of the dashboard, integrating{" "}
            <strong>multi-tenant architecture</strong> and{" "}
            <strong>i18n localization</strong> support. This section adapts to
            various regions and languages, ensuring user-specific content
            rendering and data segmentation.
          </p>
        ),
      },
      {
        title: "Post a Property Listing",
        image: "./profolio/post-listing.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A dynamic form for <strong>posting property listings</strong> with
            conditional fields, image uploads, and real-time validation.
            Leverages <strong>React Hook Form</strong>.
          </p>
        ),
      },
      {
        title: "Credits & Usage Tracking",
        image: "./profolio/credits-usage.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            An intuitive interface for tracking <strong>credit usage</strong>,
            integrated with <strong>Redux Toolkit Query</strong> for efficient
            data fetching. Displays visual progress indicators using{" "}
            <strong>Chart.Js</strong>.
          </p>
        ),
      },
      {
        title: "Agency Staff Management",
        image: "./profolio/agency-staff.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A <strong>staff management portal</strong> featuring{" "}
            <strong>role-based access control (RBAC)</strong> and{" "}
            <strong>credit allocation</strong>. Built with Redux for state
            handling and allows fine-grained permission settings for agency team
            members.
          </p>
        ),
      },
      {
        title: "Settings & Configurations",
        image: "./profolio/settings.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            Advanced <strong>settings panel</strong> allowing users to configure{" "}
            <strong>multi-layered permissions</strong>, manage API keys, and
            customize platform preferences. Leveraging React's state management,
            changes reflect instantly without page reloads.
          </p>
        ),
      },
      // {
      //   title: "Inbox & Communication Hub",
      //   image: "./profolio/inbox.png",
      //   description: (
      //     <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
      //       A real-time <strong>messaging system</strong> supporting{" "}
      //       <strong>socket.io</strong> for instant communication between users.
      //       Includes <strong>threaded conversations</strong>,{" "}
      //       <strong>read receipts</strong>, and dynamic UI updates, ensuring
      //       smooth collaboration.
      //     </p>
      //   ),
      // },
      {
        title: "Pricing & Packages",
        image: "./profolio/packages.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            Comprehensive <strong>subscription management system</strong>{" "}
            showcasing pricing tiers, feature comparisons, and interactive
            selection forms. Built with React hooks for dynamic content updates
            and <strong>Swiper Js</strong> for content display.
          </p>
        ),
      },

      // {
      //   title: "Property Listings",
      //   image: "./profolio/listings.png",
      //   description: (
      //     <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
      //       A <strong>property listing module</strong> featuring advanced{" "}
      //       <strong>search filters</strong> and <strong>pagination</strong>.
      //       Implements server-side rendering (SSR) using Next.js, ensuring fast
      //       data loads and SEO optimization.
      //     </p>
      //   ),
      // },
    ],
  },

  {
    id: 2,
    title: "Editor Portfolio Website",
    description:
      "Creative showcase of video editing and web development expertise",
    image: "./editor-portfolio/Thumbnail.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Aceternity-UI",
      "Framer Motion",
    ],
    liveUrl: "https://naukhaiz.vercel.app",
    githubUrl: "https://github.com/naukhaizanjum252/portfolio-aceternity-next",
    iconSize : 18,
    details:
      "A sleek and responsive portfolio website highlighting video editing projects and web development work. Key features include a dynamic hero section, structured long-form content grid, user-friendly contact form, and engaging testimonials. Built with modern React frameworks and styled using Tailwind CSS.",
    sections: [
      {
        title: "Hero Spotlight",
        image: "./editor-portfolio/Hero.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A visually striking <strong>hero section</strong> designed to grab
            attention instantly. Combines bold headlines, smooth animations, and
            strategic call-to-action buttons for maximum impact.
          </p>
        ),
      },
      {
        title: "Content Grid",
        image: "./editor-portfolio/long-form-grid.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A clean <strong>content grid layout</strong> tailored for long-form
            articles and videos. Built with dynamic grids and responsive design
            to ensure effortless readability across devices.
          </p>
        ),
      },

      {
        title: "Testimonial Section",
        image: "./editor-portfolio/testimonials.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A modern <strong>testimonials section</strong> with interactive
            sliders and seamless transitions. Built with React components to
            showcase client reviews in style.
          </p>
        ),
      },
      {
        title: "Contact Section",
        image: "./editor-portfolio/contact-us.png",
        description: (
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            A sleek <strong>Contact Us page</strong> featuring responsive forms,
            Google Maps integration, and smooth real-time validation using React
            Hook Form.
          </p>
        ),
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

  const renderSections = (listView: boolean) =>
    listView ? renderListView() : renderSwiper();

  const renderContent = (
    section: any,
    hideOverlay: boolean = false,
    fullView: boolean = false
  ) => (
    <>
      <h3 className="text-xl font-semibold dark:text-white mb-2">
        {section.title}
      </h3>

      {fullView && (
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
          {section.description}
        </p>
      )}

      {/* Image Container with Hover Effect */}
      <div className="px-4">
        <div
          className={
            fullView
              ? ""
              : "relative w-full md:h-[480px] h-[230px] rounded-lg overflow-hidden group cursor-pointer "
          }
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

          {!hideOverlay && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-medium">
                Click to view full image
              </span>
            </div>
          )}
        </div>
      </div>

      {!fullView && (
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
          {section.description}
        </p>
      )}
    </>
  );

  const renderListView = () =>
    selectedProject?.sections?.map((section) => (
      <motion.div
        // whileHover={{ scale: 1.05 }}
        initial={{ y: -1050 }}
        animate={{ y: 0 }}
      >
        <Card
          style={{
            padding: 18,
            margin: 50,
            backgroundColor: "#fafafa",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: 18,
          }}
        >
          {renderContent(section, true, true)}
        </Card>
      </motion.div>
    ));
  const renderSwiper = () => (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mb-4"
    >
      {selectedProject?.sections?.map((section, index) => (
        <SwiperSlide key={index}>{renderContent(section)}</SwiperSlide>
      ))}
    </Swiper>
  );

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
              whileHover={{ scale: 1.005 }}
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
                  className="text-black hover:text-blue-400 transition-colors duration-300 inline-flex gap-24"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.h3
                    className="text-xl group-hover:text-blue-400 font-semibold mb-2 dark:text-white inline-flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <ExternalLink size={project?.iconSize || 28} />
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
              <div className=" p-6">
                <div className=" flex justify-between items-center mb-4">
                  <div className=" inline-flex gap-4">
                    <h2 className=" text-2xl font-bold dark:text-white">
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
                {renderSections(true)}

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
