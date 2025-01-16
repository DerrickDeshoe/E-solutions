"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai"; // Import the X icon
import { FaChevronDown } from "react-icons/fa"; // Import the dropdown icon
import Logo from "../../public/Images/NavBarImages/Logo.svg";
import Facebook from "../../public/Images/NavBarImages/linkedin-icon.svg";
import Instagram from "../../public/Images/NavBarImages/linkedin-icon.svg";
import Twitter from "../../public/Images/NavBarImages/linkedin-icon.svg";
import Phone from "../../public/images/NavBarImages/phone.svg";
import White from "../../public/images/NavBarImages/HomeWhite.svg";
import Location from "../../public/images/HomeImages/Location.svg";
import Call from "../../public/images/HomeImages/call1.svg";
import Email from "../../public/images/HomeImages/mail-01.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownStates, setDropdownStates] = useState({
    services: false,
    products: false,
    technologies: false,
  }); // Desktop dropdown states
  const [mobileDropdownStates, setMobileDropdownStates] = useState({
    services: false,
    products: false,
    technologies: false,
  }); // Mobile dropdown states

  const dropdownRef = useRef(null);

  const links = [
    { label: "About", href: "/About" },
    {
      label: "Services",
      href: "/",
      hasDropdown: true,
      key: "services",
    },
    {
      label: "Our Products",
      href: "/Products",
      hasDropdown: true,
      key: "products",
    },
    {
      label: "Technologies",
      href: "/Technologies",
      hasDropdown: true,
      key: "technologies",
    },
  ];

  const dropdownLinks = {
    services: [
      { label: "Service1", href: "/Service" },
      { label: "Payment Solutions", href: "/Payment" },
    ],
    products: [
      { label: "Software", href: "#" },
      { label: "Hardware", href: "#" },
    ],
    technologies: [
      { label: "AI", href: "#" },
      { label: "Blockchain", href: "#" },
    ],
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownStates({
          services: false,
          products: false,
          technologies: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute w-[100%] bg-transparent flex flex-col lg:items-center lg:justify-between text-white z-[80]">
      <div className="flex flex-col w-[100%] space-y-2  py-3">
        {/* Top Bar Phone */}
        <div className=" lg:hidden flex justify-between items-center px-5">
          <div className="flex space-x-1 items-center">
            <Image src={Location} alt="Twitter" className="w-[7%]" />
            <p className=" text-[9px] lg:text-[13px] ">
              55 Rossal Road, Greendale, Harare
            </p>
          </div>

          <Link href="#" className="flex items-center justify-end space-x-1">
            <Image src={Email} alt="Twitter" className="w-[9%]" />
            <p className="text-[9px] lg:text-[13px] ">sales@esolutions.co.zw</p>
          </Link>
        </div>

        <div className="flex lg:hidden border-b border-white"></div>

        {/* Top Bar Laptop */}
        <div className=" hidden lg:flex justify-between items-center px-5 lg:px-[6%]">
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2">
              <Image
                src={Facebook}
                alt="Facebook"
                className="w-[10%] lg:w-[13%]"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                className="w-[10%] lg:w-[13%]"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                className="w-[10%] lg:w-[13%]"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                className="w-[10%] lg:w-[13%]"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                className="w-[10%] lg:w-[13%]"
              />
            </div>
            <div className="border-r border-white"></div>
            <div className="flex space-x-2 items-center">
              <Image src={Location} alt="Twitter" className="w-[7%]" />
              <p className="text-[13px] ">55 Rossal Road, Greendale, Harare</p>
            </div>
          </div>
          <div className="flex space-x-3 lg:space-x-4 justify-end">
            <Link href="#" className="flex items-center space-x-2">
              <Image src={Email} alt="Twitter" className="w-[9%]" />
              <p className="text-[13px] ">sales@esolutions.co.zw</p>
            </Link>
            <div className="border-r border-white"></div>
            <Link href="#" className="flex items-center space-x-2">
              <Image src={Call} alt="Twitter" className="w-[6%]" />
              <p className="text-[13px] ">
                +263 772 989 161 | +263 242 480 344
              </p>
            </Link>
          </div>
        </div>

        <div className=" hidden lg:flex w-[100%] relative">
          <Image src={White} alt="Twitter" className="" />
        </div>

        {/* Main Nav */}
        <div className="hidden lg:flex justify-between items-center w-[100%] px-10 lg:px-[6%] text-blue absolute top-[25%]">
          <div>
            <Link href="./" className="flex items-center">
              <Image src={Logo} alt="Logo" className="w-[15%]" />
              <p className="text-2xl">Solutions</p>
            </Link>
          </div>
          <div className="flex space-x-7 items-center">
            <div className="hidden lg:flex lg:items-center space-x-5 text-blue">
              {links.map((link) =>
                link.hasDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative flex items-center space-x-1"
                    key={link.key}
                  >
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className=" hover:text-orange flex items-center space-x-1 group"
                    >
                      <span>{link.label}</span>
                      <FaChevronDown className="text-xs" />
                    </button>

                    {dropdownStates[link.key] && (
                      <div className="absolute top-8 bg-white text-blue shadow-md rounded w-60">
                        {dropdownLinks[link.key].map((dropdownLink) => (
                          <Link
                            key={dropdownLink.href}
                            href={dropdownLink.href}
                            className="block px-4 py-2 hover:bg-gray-200 hover:text-orange text-sm"
                          >
                            {dropdownLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className=" hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <Link
              href="/Donate"
              className="flex space-x-2 items-center  border border-orange rounded-md p-2"
            >
              <Image src={Phone} alt="Phone" className="w-[40%] lg:w-[12%]" />
              <button className="text-xs text-orange">
                Talk with an Expert
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden absolute top-10 right-4">
        <button
          onClick={toggleMenu}
          className=" hover:text-overlay focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="absolute flex lg:hidden top-11 left-5 w-[80%]">
        <Link href="./" className="flex ">
          <Image src={Logo} alt="Logo" className="w-[15%]" />
          <p className="text-[17px]">Solutions</p>
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 w-2/3 max-w-xs bg-white h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col items-center justify-center text-blue`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-blue text-3xl focus:outline-none"
        >
          <AiOutlineClose />
        </button>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {links.map((link) =>
            link.hasDropdown ? (
              <div key={link.key} className="relative">
                <button
                  onClick={() => toggleMobileDropdown(link.key)}
                  className="text-blue hover:text-orange transition-colors flex items-center space-x-1 group"
                >
                  <span>{link.label}</span>
                  <FaChevronDown className="text-xs" />
                </button>
                {mobileDropdownStates[link.key] && (
                  <div className="bg-white rounded shadow-md text-sm mt-2 absolute left-[16%] z-[3]">
                    {dropdownLinks[link.key].map((dropdownLink) => (
                      <Link
                        key={dropdownLink.href}
                        href={dropdownLink.href}
                        onClick={toggleMenu}
                        className="block px-4 py-2 text-blue hover:bg-orange"
                      >
                        {dropdownLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-blue hover:text-zinc-500 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/Donate"
            className="flex space-x-2 items-center  border border-orange rounded-md p-2"
          >
            <Image src={Phone} alt="Phone" className="w-[12%]" />
            <button className="text-xs text-orange">Talk with an Expert</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
