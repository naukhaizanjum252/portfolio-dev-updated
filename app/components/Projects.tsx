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

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-project",
    details:
      "This e-commerce platform features user authentication, product catalog, shopping cart functionality, and real-time inventory updates. It uses React for the frontend, Node.js and Express for the backend, and MongoDB for the database. Real-time features are implemented using Socket.io.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application for teams.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://task-manager-example.com",
    githubUrl: "https://github.com/username/task-manager",
    details:
      "This task management app allows teams to create, assign, and track tasks in real-time. It features drag-and-drop functionality, task prioritization, and team collaboration tools. Built with Next.js and TypeScript for the frontend, with Prisma ORM and PostgreSQL for efficient data management.",
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description: "An interactive weather forecast dashboard with data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
    liveUrl: "https://weather-dashboard-example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    details:
      "This weather forecast dashboard provides detailed weather information and forecasts for locations worldwide. It features interactive charts and maps built with D3.js, and integrates with the OpenWeatherMap API for real-time weather data. The app is responsive and works across desktop and mobile devices.",
  },
]

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

