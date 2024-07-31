import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <nav>
      <ul className="flex space-x-8">
        <li className="text-base font-bold text-tertiary hover:text-primary-hover transition-all duration-500 cursor-pointer">
          <Link
            href="/"
            title="Anasayfa"
            className={currentRoute === "/" ? "text-primary" : ""}
          >
            Anasayfa
          </Link>
        </li>
        <li className="text-base font-bold text-tertiary hover:text-primary-hover transition-all duration-500 cursor-pointer">
          <Link
            href="/favorite-hotels"
            title="Favori Oteller"
            className={
              currentRoute === "/favorite-hotels" ? "text-primary" : ""
            }
          >
            Favori Oteller
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
