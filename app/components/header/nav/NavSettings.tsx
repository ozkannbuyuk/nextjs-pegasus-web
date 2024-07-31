import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavSettings: React.FC = () => {
  const social = [
    {
      href: "https://www.facebook.com/PegasusHavayollari",
      title: "Pegasus - Facebook",
      icon: <FaFacebook />,
    },
    {
      href: "https://www.instagram.com/pegasusairlines",
      title: "Pegasus - Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/company/pegasus-airlines",
      title: "Pegasus - Linkedin",
      icon: <FaLinkedin />,
    },
    {
      href: "https://x.com/ucurbenipegasus",
      title: "Pegasus - Twitter",
      icon: <FaTwitter />,
    },
  ];
  return (
    <div className="flex">
      <ul className="flex space-x-6">
        {social.map((item, index) => {
          const { href, title, icon } = item;

          return (
            <li
              className="flex justify-center items-center text-gray-500 hover:bg-primary-hover hover:bg-opacity-10 hover:text-primary-hover"
              key={index}
            >
              <a
                href={href}
                title={title}
                className="text-lg font-bold transition-all duration-500"
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavSettings;
