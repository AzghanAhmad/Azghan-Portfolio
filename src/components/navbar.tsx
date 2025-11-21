import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

type NavbarProps = {
  hide: boolean;
};


// Navbar
export const Navbar = ({ hide }: NavbarProps) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => {
        if (link.id === "home") {
          return { id: "home", element: null, offset: 0 };
        }
        const element = document.getElementById(link.id);
        return {
          id: link.id,
          element,
          offset: element ? element.getBoundingClientRect().top : Infinity,
        };
      });

      // Check if we're at the top (home)
      if (window.scrollY < 100) {
        setActive("Home");
        return;
      }

      // Find the section that's currently in view
      const currentSection = sections
        .filter((s) => s.element !== null)
        .sort((a, b) => {
          const aDist = Math.abs(a.offset);
          const bDist = Math.abs(b.offset);
          if (a.offset < 0 && b.offset < 0) return bDist - aDist;
          if (a.offset >= 0 && b.offset >= 0) return aDist - bDist;
          return a.offset >= 0 ? -1 : 1;
        })[0];

      if (currentSection) {
        const link = NAV_LINKS.find((l) => l.id === currentSection.id);
        if (link) setActive(link.title);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (linkId: string, linkTitle: string) => {
    setActive(linkTitle);
    if (linkId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(linkId);
      if (element) {
        const offset = 80; // Account for navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setToggle(false);
  };

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-4 fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md bg-black/30 border-b border-white/5"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* ===== Logo ===== */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <p className="text-gray-400 text-[18px] font-bold cursor-pointer">
            Azghan Ahmad
          </p>
        </Link>

        {/* ===== Nav Links (Desktop) ===== */}
        <ul className="list-none hidden sm:flex flex-row gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.title;
            return (
              <li key={link.id}>
                <a
                  href={link.id === "home" ? "#" : `#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.title);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 relative",
                    isActive
                      ? "text-[#60a5fa] bg-white/10"
                      : "text-gray-400 hover:text-gray-300"
                  )}
                >
                  <span>{link.title}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#4ade80] rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ===== Hamburger Menu (Mobile) ===== */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Menu Drawer */}
          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 bg-black/90 backdrop-blur-md border border-white/10 absolute top-16 right-4 mx-4 my-2 min-w-[180px] z-10 rounded-xl shadow-lg"
            )}
          >
            <ul className="list-none flex flex-col gap-3 w-full">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.title;
                return (
                  <li key={link.id}>
                    <a
                      href={link.id === "home" ? "#" : `#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.id, link.title);
                      }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200",
                        isActive
                          ? "text-[#60a5fa] bg-white/10"
                          : "text-gray-400 hover:text-gray-300"
                      )}
                    >
                      <span>{link.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
