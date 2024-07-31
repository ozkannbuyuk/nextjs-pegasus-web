import React from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  href: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6 className="text-base font-bold text-tertiary flex items-center justify-between">
          {title}
        </h6>
        <nav>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-primary-hover transition-all duration-500"
                  title={item.title}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
};

export default Menu;
