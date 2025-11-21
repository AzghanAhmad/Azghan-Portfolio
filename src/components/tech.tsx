/*  src/components/Tech.tsx  */
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { TECHNOLOGIES } from "../constants";
import { textVariant } from "../utils/motion";

const techGroups = [
  {
    title: "Languages",
    items: TECHNOLOGIES.filter(t =>
      ["JavaScript", "TypeScript", "Java", "Python", "C#", "SQL"].includes(t.name)
    ),
  },
  {
    title: "Frontend & UI",
    items: TECHNOLOGIES.filter(t =>
      ["React", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Figma"].includes(t.name)
    ),
  },
  {
    title: "Backend & Frameworks",
    items: TECHNOLOGIES.filter(t =>
      ["Node.js", "Express.js", "Spring Boot", ".NET", "MERN Stack"].includes(t.name)
    ),
  },
  {
    title: "Databases",
    items: TECHNOLOGIES.filter(t =>
      ["MongoDB", "MySQL", "PostgreSQL"].includes(t.name)
    ),
  },
  {
    title: "DevOps & Tools",
    items: TECHNOLOGIES.filter(t =>
      ["Git", "GitHub", "Docker", "Postman", "Jenkins"].includes(t.name)
    ),
  },
  {
    title: "Advanced Concepts",
    items: TECHNOLOGIES.filter(t =>
      ["Microservices", "GraphQL"].includes(t.name)
    ),
  },
];

export const Tech = () => {
  return (
    <SectionWrapper idName="tech">
      <>
        {/* ---------- Header ---------- */}
        <motion.div variants={textVariant()}>
          <p className="text-secondary text-[17px] font-semibold uppercase tracking-wider">
            My Technical Arsenal
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills
          </h2>
        </motion.div>

        {/* ---------- Short intro ---------- */}
        <motion.p
          className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
        >
          Full-stack, AI-ready, and DevOps-enabled – the tools I use to ship
          production-grade solutions.
        </motion.p>

        {/* ---------- 3-D Balls per Section ---------- */}
        <div className="mt-16 space-y-16">
          {techGroups.map((group, gIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gIdx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section title */}
              <h3 className="text-white text-2xl font-bold mb-8 text-center md:text-left border-l-4 border-green-500 pl-4">
                {group.title}
              </h3>

              {/* Balls */}
              <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-12">
                {group.items.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    className="w-24 h-24 md:w-28 md:h-28 cursor-pointer"
                    /* ---- NO ZOOM ---- */
                    whileHover={{ scale: 1 }}   // keep original size
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <BallCanvas icon={tech.icon|| "/fallback-icon.png"} />
                    <p className="text-center text-gray-400 text-xs mt-2 font-medium">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </>
    </SectionWrapper>
  );
};