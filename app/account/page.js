"use client"
import Link from "next/link";
import { useState } from "react";

// Example dynamic data

const testStats = [
  { title: "Target Score", value: "7.0" },
  { title: "Average Score", value: "4" },
  { title: "Total Tests Taken", value: "46" },
  { title: "Average Time", value: "01:03 mins" },
  { title: "Accuracy", value: "35.61%" },
];

const testSections = ["LISTENING", "READING", "WRITING", "SPEAKING"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("LISTENING");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen">
      {/* Dashboard */}
      <div className="rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Test Performance</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {testStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs for Test Sections */}
        <div className="bg-white p-5">
          <div className="flex space-x-4 mb-4">
            {testSections.map((section) => (
              <button
                key={section}
                className={`${
                  activeTab === section
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange(section)}
              >
                {section}
              </button>
            ))}
          </div>
          {/* Chart - This is a placeholder for now */}
          <div className=" h-64 rounded-lg">
            {/* Placeholder for chart */}
            <p className="text-center pt-24">
              {activeTab} Performance Chart Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
