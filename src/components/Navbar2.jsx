import React, { useState,useEffect } from "react";
import { Transition } from "@headlessui/react";
import logoImage from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky,setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", link: "Logo", logo: logoImage },
    { path: "/about", link: "About Us" },
    { path: "/services", link: "Services" },
    { path: "/portfolio", link: "Portfolio" },
    { path: "/appIdeas", link: "App Ideas" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 bg-gray-200">
      <nav className={`${isSticky ? "bg-white shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-[17rem]">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/" className="hover:text-purple-900">
                  {navLinks[0].link === "Logo" ? (
                    <img src={logoImage} alt="Logo" className="h-11 mr-8" />
                  ) : (
                    navLinks[0].link
                  )}
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10">
                  {navLinks.slice(1).map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="hover:text-[#1C7CBE]"
                    >
                      {link.link}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <IoClose size={20} /> : <HiOutlineMenuAlt3 size={20} />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.slice(1).map((link) => (
                    <NavLink
                    onClick={toggleMenu}
                      key={link.path}
                      to={link.path}
                      className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center"
                    >
                      {link.link}
                    </NavLink>
                  ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
