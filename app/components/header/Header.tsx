"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import useWindowSize from "../../hooks/useWindowSize";

import Nav from "./nav/Nav";
import NavSettings from "./nav/NavSettings";
import NavMobile from "./nav/NavMobile";

const Header: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <header className="bg-white border-b-4 border-primary h-16 flex items-center top-0 w-full">
      <div className="container mx-auto h-full flex items-center justify-between">
        {width && width > 1024 ? (
          <Link href="/" className="cursor-pointer" title="Pegasus">
            <Image
              src="/images/pegasus-logo.svg"
              alt="Pegasus"
              width={140}
              height={40}
            />
          </Link>
        ) : (
          <Link href="/" className="cursor-pointer" title="Pegasus">
            <Image
              src="/images/pegasus-logo.svg"
              alt="Pegasus"
              width={100}
              height={40}
              className="ml-2"
            />
          </Link>
        )}

        <div className="hidden lg:block">
          <Nav />
        </div>

        <div className="hidden lg:block">
          <NavSettings />
        </div>

        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
