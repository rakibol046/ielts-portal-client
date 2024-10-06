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
              <Image
                src={home}
                alt="Home"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
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
            {/* Notification Bell */}
            <div className="relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 016 6v5.586l1.707 1.707A1 1 0 0116.293 16H3.707a1 1 0 01-.707-1.707L5 13.586V8a6 6 0 016-6zm0 12a3 3 0 01-3-3h6a3 3 0 01-3 3zm1 1h-2v1h2v-1z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

            {/* Profile section */}
            <div className="flex items-center space-x-2 cursor-pointer relative group">
              {/* Profile image using next/image */}
              
                <Image
                  src={home}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full"
                />
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
