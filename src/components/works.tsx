import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-black-200 p-5 rounded-2xl w-full h-full flex flex-col"
      style={{ minHeight: "500px" }}
    >
      <div className="relative w-full h-[230px] flex-shrink-0">
        {/* Project image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site + Github */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {live_site_link && (
            <div
              onClick={() =>
                window.open(live_site_link, "_blank", "noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={preview}
                alt="Live Site"
                title="Live Site"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}

          {source_code_link && (
            <div
              onClick={() =>
                window.open(source_code_link, "_blank", "noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
            >
              <img
                src={github}
                alt="Github"
                title="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-5 flex-grow flex flex-col">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] flex-grow">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Works Section
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've Built & Mastered</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I don’t just build projects — I craft experiences. 
            Every app here is deployed, responsive, and built to impress — 
            both users and developers who read the code.
            <br />
            From pixel-perfect responsive interfaces to robust backend integrations, 
            each one demonstrates clean architecture, performance optimization, 
            and a strong focus on user experience.
            <br />
            Explore live demos and dive into the source code on GitHub. 
            Every line reflects my commitment to writing scalable, maintainable, 
            and production-ready solutions — the kind you can deploy with confidence.
            See what clean, thoughtful, and high-quality code looks like in action.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
