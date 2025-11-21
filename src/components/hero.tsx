import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Hero = () => {
  const titles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "MERN Stack Developer",
    "Software Engineer",
    "Front-End Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, titles]);

  return (
    <section
      className="relative w-full h-auto sm:h-screen mx-auto flex flex-col-reverse sm:flex-row 
      items-center justify-between px-6 sm:px-12 md:px-16 overflow-hidden max-w-[100vw]"
    >
      {/* ===== Left Side (Text Section with Decorative Line) ===== */}
      <div
        className={cn(
          "flex flex-row items-start justify-start w-full sm:w-1/2 py-10 sm:py-0"
        )}
      >
        {/* Decorative Line on Left */}
        <div className="flex flex-col justify-start items-center mr-4 mt-3">
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-[3px] sm:h-44 h-24 bg-gradient-to-b from-white to-gray-600 mt-1" />
        </div>

        {/* Text Content */}
        <div className="max-w-[480px] text-left">
          <h1
            className={cn(
              styles.heroHeadText,
              "text-gray-100 leading-tight sm:leading-[80px]"
            )}
          >
            Hi, I'm <span className="text-[#915eff]">Azghan Ahmad</span>
          </h1>

          <p
            className={cn(
              styles.heroSubText,
              "mt-3 text-gray-400 leading-relaxed text-[16px] sm:text-[18px]"
            )}
          >
            I design and develop complete web solutions from clean frontends to
            scalable backends. <br className="hidden sm:block" />
            I love turning ideas into fast, user-friendly digital products.
          </p>

          {/* Typing Text Animation */}
          <div className="mt-4 text-[16px] sm:text-[20px] font-medium text-white">
            <span className="text-gray-300">I’m a </span>
            <span className="text-[#915eff]">{text}</span>
            <span className="animate-pulse text-gray-400">|</span>
          </div>

          {/* ===== Download CV Button ===== */}
          <a
            href="/Demo-Portfolio/Arhama-Shahab-CV.pdf"
            download
            className="btn mt-6"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ===== Right Side (3D Model) ===== */}
      <div
        className="flex justify-center items-center w-full sm:w-1/2 h-[300px] sm:h-full mb-10 sm:mb-0 
        relative overflow-hidden"
      >
        <div className="w-full h-full">
          <ComputersCanvas />
        </div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-200 mb-1"
            />
          </div>
        </a>
      </div>

      {/* ===== Inline Styling for the Button ===== */}
      <style>{`
        .btn {
          display: inline-block;
          padding: 14px 35px;
          background: linear-gradient(135deg, #7a5cf2, #915eff);
          color: white;
          border-radius: 30px;
          font-weight: 500;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #a87fff, #7a5cf2);
          transition: all 0.4s ease;
          z-index: -1;
        }

        .btn:hover::before {
          left: 0;
        }

        .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
