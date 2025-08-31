import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${scrolled ? "bg-primary shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-15 object-contain" />
          <p className="text-white text-[22px] font-extrabold cursor-pointer flex">
            <span
              className="sm:block hidden"
              style={{
                backgroundImage: "linear-gradient(to bottom, white, white)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 6px",
                backgroundPosition: "0 100%",
                display: "inline-block",
                fontWeight: "900",
                color: "white",
              }}
            >
              Full Stack Portfolio
            </span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          {/* Menu icon */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 cursor-pointer z-50"
            onClick={() => setToggle(!toggle)}
          />

          {/* Overlay */}
          <div
            className={`fixed top-0 right-0 w-full h-full bg-black/70 backdrop-blur-sm transition-all duration-300 z-40 ${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setToggle(false)}
          />

          {/* Slide-in panel */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#1a1a1a]/90 to-[#000]/90 shadow-2xl rounded-l-3xl p-8 flex flex-col gap-8 transform transition-transform duration-500 z-50 ${toggle ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <ul className="flex flex-col gap-6 mt-12">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`text-lg font-medium cursor-pointer px-3 py-2 rounded-lg hover:bg-purple-700/40 transition-all duration-300 ${active === nav.title ? "bg-purple-700/50 text-white" : "text-secondary"
                    }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mt-auto">
              &copy; 2025 Full Stack Portfolio
            </p>
          </div>
        </div>



      </div>
    </nav>
  );
};

export default Navbar;
