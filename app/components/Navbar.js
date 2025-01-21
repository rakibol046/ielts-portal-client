"use client";
// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import home from "@/public/images/icon/home.svg";
import logo from "@/public/images/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  // console.log("path = ",currentPath);
  const [user, setUser] = useState(false);
  const loginSystem = false;


  const menuItem = [
    {
      name: "Listening",
      url: "/listening",
      child: [],
    },
    {
      name: "Reading",
      url: "/reading",
      child: [],
    },
    {
      name: "Writing",
      url: "/writing",
      child: [],
    },
    {
      name: "Speaking",
      url: "/speaking",
      child: [],
    },
    {
      name: "Mock Test",
      url: "/mock",
      child: [],
    },
    {
      name: "IELTS Tips",
      url: "/tips",
      child: [
        {
          name: "Listening",
          url: "/tips/listening",
          child: [],
        },
        {
          name: "Reading",
          url: "/tips/reading",
          child: [],
        },
        {
          name: "Writing",
          url: "/tips/writing",
          child: [],
        },
        {
          name: "Speaking",
          url: "/tips/speaking",
          child: [],
        },
      ],
    },
  ];

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between font-bold">
          {/* Left side of the navbar */}
          <div className="flex items-center space-x-4">
            {/* Home icon using the imported SVG */}
            <Link href="/" className="rounded-md flex items-center">
              {/* <Image
                src={home}
                alt="Home"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z"/></svg>
            </Link>

            {/* Menu items */}
            <div className="hidden lg:flex items-center">
              {menuItem.map((item, index) =>
                item.child.length === 0 ? (
                  <Link
                    key={index}
                    href={item.url}
                    className={`px-6 py-4 rounded-md cursor-pointe ${
                      currentPath === item.url
                        ? "text-orange-400"
                        : "hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={index} className="relative group">
                    <Link
                      href={item.url}
                      className={`px-3 py-2 rounded-md text-sm cursor-pointer flex items-center ${
                        currentPath === item.url
                          ? "text-orange-400"
                          : "hover:text-orange-400"
                      }`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    {/* Dropdown content */}
                    <div className="absolute bg-white text-black py-2 mt-1 w-48 shadow-md rounded-md hidden group-hover:block">
                      {item?.child.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right side of the navbar */}
          <div className="hidden lg:flex items-center space-x-4">
            

            {/* Profile section */}
           { loginSystem ? user? 
            <div className="flex items-center space-x-2 cursor-pointer relative group">
            {/* Profile image using next/image */}
            
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M226-262q59-39.67 121-60.83Q409-344 480-344t133.33 21.17q62.34 21.16 121.34 60.83 41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM479.73-80q-83.1 0-156.18-31.5-73.09-31.5-127.15-85.83-54.07-54.34-85.23-127.23Q80-397.45 80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.33 709-143 635.91-111.5 562.83-80 479.73-80Z"/></svg>
              {/* Profile name */}
              <span className="hidden sm:inline-block text-sm">
                <Link href="/account">Md. Rakibul Islam</Link>
              </span>
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            {/* Dropdown content as card design */}
            <div className="absolute hidden group-hover:block bg-white text-black py-4 min-w-80 shadow-lg rounded-md right-0 top-full mt-1">
              <div className="p-4">
                <h2 className="font-bold text-lg">Md. Rakibul Islam</h2>
                <p className="text-gray-600">mdrakibolislam046@yahoo.com</p>
                <hr className="my-2 border-gray-300" />
                <div className="mt-2">
                  <Link
                    href="#"
                    className="block py-2 hover:bg-gray-100 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 hover:bg-gray-100 rounded-md"
                  >
                    My Profile
                  </Link>
                </div>
                <hr className="my-2 border-gray-300" />
                <Link
                  href="#"
                  className="block py-2 hover:bg-gray-100 rounded-md"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
          :
          <Link href="/account/login" className="rounded-md flex items-center"> Log In</Link>
          : ""
          }
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          {/* Profile section in mobile */}
          <div className="flex items-center space-x-2 cursor-pointer mt-2 p-">
            <Image
              src={home}
              alt="Profile"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h2 className="font-bold text-sm">Md. Rakib</h2>
              <p className="text-gray-300 text-xs">rakib@example.com</p>
            </div>
          </div>
          <hr />
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...menuItem.map((item) => item.name)].map((itemName, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-700"
              >
                {itemName}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
