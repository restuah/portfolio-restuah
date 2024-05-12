"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const NavLinks = [
  //   {
  //     title: "Home",
  //     href: "#home",
  //   },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, navbarIsOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="mx-auto flex flex-wrap items-center justify-between px-4 py-2 md:p-8">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-5xl"
        >
          Home
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => navbarIsOpen(true)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => navbarIsOpen(false)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div id="navbar" className="menu hidden text-white md:block md:w-auto">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
