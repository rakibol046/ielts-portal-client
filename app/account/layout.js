"use client";
import Link from "next/link";
import { useState } from "react";

// Example dynamic data
const navItems = [
  { name: "My Dashboard", href: "/account", active: true },
  { name: "Practice History", href: "/account/practice-history" },
  { name: "My Profile", href: "/account/my-profile" },
  { name: "Logout", href: "#" },
];

export default function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-4 bg-gray-100 p-2 lg:px-28 lg:py-8 gap-8">
      {/* Sidebar */}
      <div>
        <aside className="bg-white p-4 col-span-1 shadow-md shadow-slate-200 rounded-md min-h-96">
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block text-xl font-bold ${
                  item.active ? "text-blue-500 font-medium" : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      <main className=" col-span-3 w-full">{children}</main>
    </div>
  );
}
