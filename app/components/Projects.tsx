"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Code, Globe } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  details: string
}

const projects = [
  {
    id: 1,
    title: "Profolio - Real Estate Management Platform",
    description: "Comprehensive real estate management system",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/18/d8/96/18d89612-18ac-b84e-202d-7d4ef45337fe/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/460x0w.webp",
    technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Ant Design", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    details: "A complete real estate management platform built for property agencies in Saudi Arabia. Features include staff management, credit system, property listings, analytics dashboard, and more.",
    sections: [
      {
        title: "Dashboard & Analytics",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-6iKAC8sSH1tsO51crNwEVzu7HVJx0s.png",
        description: "Interactive dashboard with real-time analytics, performance metrics, and property management features."
      },
      {
        title: "Property Management",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Post%20Listing-K96SgwDVNV4p2LEB81IXjKF9aqLiGm.png",
        description: "Comprehensive property listing and management system with advanced filtering and search capabilities."
      },
      {
        title: "Staff Management",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-localhost-3000-en-agency-staff-2025-02-24-12_38_31-j8x8K6LTtzrZyG2S9FyCrmHWCIryby.png",
        description: "Role-based access control and credit management system for agency staff members."
      }
    ]
  },
  {
    id: 2,
    title: "Zameen.com",
    description: "Pakistan's largest real estate portal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXFXqHPHyBNtpyArLyT6eEX_NYs45YDlyHA&s",
    technologies: ["React", "Next.js", "Redux", "Ant Design"],
    liveUrl: "https://www.zameen.com/",
    githubUrl: "#",
    details: "Zameen.com is Pakistan's largest real estate portal, connecting buyers, sellers, and real estate agents."
  },
  {
    id: 3,
    title: "Bayut.sa",
    description: "Leading real estate marketplace in Saudi Arabia",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQFAICCa9UGBxw/company-logo_200_200/company-logo_200_200/0/1719256932375/bayut_ksa_logo?e=2147483647&v=beta&t=tanF-iG_lGncla3M0FVdwjHqDeAq92YD4JwAWZ9oUjs",
    technologies: ["React", "Next.js", "TypeScript", "Redux"],
    liveUrl: "https://www.bayut.sa/",
    githubUrl: "#",
    details: "Bayut.sa is a leading real estate marketplace in Saudi Arabia, providing a platform for property listing and searching."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                    >
                      <Globe size={20} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <Code size={20} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

