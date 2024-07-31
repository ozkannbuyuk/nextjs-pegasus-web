import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";

const NavMobile: React.FC = () => {
  const currentRoute = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="relative flex z-10">
      <div
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center cursor-pointer text-tertiary mr-2"
      >
        <BiMenuAltRight className="w-6 h-6" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-tertiary fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-500 overflow-hidden z-10`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-white absolute top-5 right-2"
        >
          <AiOutlineClose className="w-5 h-5" />
        </div>

        <ul className="text-center">
          <li className="text-base text-white hover:text-primary-hover transition-all duration-500 cursor-pointer mb-8">
            <Link
              href="/"
              title="Anasayfa"
              className={currentRoute === "/" ? "text-primary" : ""}
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
          </li>
          <li className="text-base text-white hover:text-primary-hover transition-all duration-500 cursor-pointer">
            <Link
              href="/favorite-hotels"
              title="Favori Oteller"
              className={
                currentRoute === "/favorite-hotels" ? "text-primary" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Favori Oteller
            </Link>
          </li>
        </ul>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
