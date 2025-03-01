"use client"

import { motion } from "framer-motion"
import { Code, Lock, Zap, Layout, GitBranch, Terminal, Layers, Cpu, Globe, BarChart } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)
const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React.js, Next.js",
    description:
      "Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance.",
    color: "text-blue-500",
  },
  {
    icon: Layers,
    name: "State Management",
    tech: "Redux Thunk, RTK Toolkit, Context API",
    description: "Managing dynamic application state using Redux and RTK Toolkit for seamless data flow.",
    color: "text-indigo-500",
  },
  {
    icon: Layout,
    name: "Styling & Design",
    tech: "Tailwind CSS, Ant Design",
    description: "Creating visually appealing and responsive designs using modern CSS frameworks.",
    color: "text-pink-500",
  },
  {
    icon: Globe,
    name: "Localization",
    tech: "i18n",
    description: "Implementing multi-language support to enhance global accessibility.",
    color: "text-green-500",
  },
  {
    icon: Zap,
    name: "Animations",
    tech: "React Lottie",
    description: "Creating smooth, engaging animations with Lottie for enhanced user interaction.",
    color: "text-yellow-500",
  },
  {
    icon: Lock,
    name: "Authentication",
    tech: "Keycloak",
    description: "Integrating secure authentication and authorization flows with Keycloak.",
    color: "text-red-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub",
    description: "Managing code versions efficiently and collaborating through GitHub.",
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "API Integration",
    tech: "Axios, RTK Query",
    description: "Fetching and managing data from RESTful APIs using Axios and RTK Query.",
    color: "text-purple-500",
  },
  {
    icon: BarChart,
    name: "Data Visualization",
    tech: "Chart.js",
    description: "Creating interactive data visualizations to represent complex datasets.",
    color: "text-teal-500",
  },
  // {
  //   icon: Globe,
  //   name: "Web Performance",
  //   tech: "Optimization, SEO",
  //   description: "Enhancing load times, accessibility, and search engine visibility.",
  //   color: "text-cyan-500",
  // },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

