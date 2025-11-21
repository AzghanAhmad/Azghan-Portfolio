import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

import myPic from "../assets/colorfulpic.png";

export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-gray-300 bg-black">
          {/* Left: Text */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="flex-1"
          >
            
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Who I Am & What I Build</p>
              <h2 className={styles.sectionHeadText}>About Me</h2>
            </motion.div>

            <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
              I’m a <span className="text-white font-semibold">full-stack engineer</span> who thrives at the intersection of elegant design and robust architecture. 
              From crafting pixel-perfect, responsive frontends with <span className="text-white">React</span> to building scalable, high-performance backends using 
              <span className="text-white"> Node.js, Express, and MongoDB</span>. I deliver end-to-end solutions that don’t just work, they <span className="italic">perform</span>.
              <br />
              My deep foundation in <span className="text-white">Java</span> sharpens my grasp of system design, clean code, and algorithmic efficiency,  
              ensuring every feature is intentional, maintainable, and future-proof.
              <br />
              I don’t build for the sake of building. I engineer <span className="text-white font-semibold">impactful digital experiences</span>.
              Collaboration drives me. Deployment defines me.
            </p>
          </motion.div>

          {/* Right: Profile Picture with Persistent Glow on Hover */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            className="relative w-[280px] h-[320px] flex-shrink-0 flex items-center justify-center"
          >
            <Tilt
              options={{ max: 25, scale: 1.05, speed: 400 }}
              className="relative w-full h-full flex items-center justify-center group"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.4), rgba(128,128,128,0.2), rgba(0,0,0,0.1))",
                }}
              />

              {/* Subtle Rings */}
              <motion.div
                className="absolute w-[320px] h-[320px] rounded-full border-4 border-gray-500/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-[360px] h-[360px] rounded-full border-2 border-gray-400/20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container with Smooth Glow on Hover */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 25px rgba(255,255,255,0.6), 0 0 50px rgba(128,128,128,0.4)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative rounded-xl"
              >
                <motion.img
                  src={myPic}
                  alt="My Profile"
                  className="relative w-[280px] h-auto object-cover rounded-xl shadow-2xl border border-gray-600"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating Sparkles */}
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-2 h-2 bg-gray-200 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.6,
                    }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        </div>

        {/* My Services Section */}
        <motion.div
          id="services"
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="mt-20"
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>My Services</h2>
          </motion.div>

          <p className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]">
            I transform ideas into powerful, production-ready digital solutions using modern tools, clean code, and a passion for excellence.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website Developer */}
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className="bg-black-200 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-white text-[24px] font-bold mb-3">
                Website Developer
              </h3>
              <p className="text-gray-300 text-[16px] mb-4 leading-relaxed">
                Crafting fast, responsive, and visually stunning websites & web applications that work flawlessly across all devices.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Pixel-perfect responsive design</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Blazing-fast performance & Core Web Vitals optimized</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>SEO-ready structure from day one</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Built with React, Next.js, TypeScript & Tailwind CSS</span>
                </li>
              </ul>
            </motion.div>

            {/* Mobile App Developer */}
            <motion.div
              variants={fadeIn("left", "spring", 0.6, 0.75)}
              className="bg-black-200 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-white text-[24px] font-bold mb-3">
                Mobile App Developer
              </h3>
              <p className="text-gray-300 text-[16px] mb-4 leading-relaxed">
                Turning concepts into smooth, high-performance mobile apps for both Android and iOS — single codebase, native feel.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Cross-platform development with React Native</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Native-level performance & animations</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>App Store & Play Store deployment</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Push notifications, offline support & secure auth</span>
                </li>
              </ul>
            </motion.div>

            {/* UI/UX Designer */}
            <motion.div
              variants={fadeIn("right", "spring", 0.7, 0.75)}
              className="bg-black-200 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-white text-[24px] font-bold mb-3">
                UI/UX Designer
              </h3>
              <p className="text-gray-300 text-[16px] mb-4 leading-relaxed">
                Designing intuitive, beautiful, and user-centered interfaces that people love to use.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>User research & journey mapping</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Interactive wireframes & prototypes (Figma)</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Modern, minimalist visual design</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Design systems & component libraries</span>
                </li>
              </ul>
            </motion.div>

            {/* AI & Python Developer */}
            <motion.div
              variants={fadeIn("left", "spring", 0.8, 0.75)}
              className="bg-black-200 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-white text-[24px] font-bold mb-3">
                AI & Python Developer
              </h3>
              <p className="text-gray-300 text-[16px] mb-4 leading-relaxed">
                Building intelligent systems and automation tools powered by AI, machine learning, and Python.
              </p>
              <ul className="space-y-2">
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>AI-powered web & desktop applications</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Machine learning models (diagnosis, prediction, NLP)</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Data processing, visualization & automation scripts</span>
                </li>
                <li className="text-gray-400 text-[14px] flex items-start">
                  <span className="text-[#915eff] mr-2">•</span>
                  <span>Integration of LLMs, computer vision & neural networks</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </>
    </SectionWrapper>
  );
};
