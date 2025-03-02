"use client"

import { motion } from "framer-motion"
import { Code, Layers, Brush, Globe, } from "lucide-react"
import Image from "next/image"

const SkillCard = ({
  icon: Icon,
  title,
  description,
  index,
  iconClass,
}: { icon: any; title: string; description: string; index: number,iconClass:string }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Icon className={iconClass} />
    </motion.div>
    <h3 className="text-md md:text-xl font-semibold mt-4 mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>


)
export default function About() {
  const skills = [
    { iconClass :"w-8 h-8 text-blue-500", icon:Code, title: "Frameworks", description: "React, Next.js" },
    { iconClass :"w-8 h-8 text-green-500",icon:Layers, title: "State Management & API", description: "Redux Thunk, RTK Toolkit, Axios" },
    { iconClass :"w-8 h-8 text-purple-500",icon: Globe, title: "Localization & Authentication", description: "i18n, Keycloak" },
    { iconClass :"w-8 h-8 text-yellow-500",icon: Brush, title: "Animations & Forms", description: "React Lottie, Formik" },
  ]
  
  
  
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As a passionate Front End Developer, I specialize in building robust and scalable web applications. With
              a strong foundation in MongoDB, Express.js, React, and Node.js, I create seamless full-stack solutions
              that deliver exceptional user experiences.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise extends to modern frameworks like Next.js and state management tools like Redux. I'm
              committed to writing clean, efficient code and staying up-to-date with the latest industry trends to
              deliver cutting-edge solutions for my clients.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                index={index}
                iconClass={skill.iconClass}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

