import React from "react";

export default function CombinedSection() {
  // Combined data for multiple sections with test details
const sectionDataListening = [
  {
    sectionTitle: "LISTENING",
    academicLevel: 19,
    testData: [
      {
        title: "Test1",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Short Answer Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test2",
        status: "Score: 4.5",
        items: [
          { part: "Part1 Short Answer Identification", status: "Correct 10/13" },
          { part: "Part2 Short Answer Completion", status: "Correct 8/13" },
          { part: "Part3 Multiple Choice", status: "Correct 11/14" },
          { part: "Part4 Identify Completion", status: "Correct 5/5" },
        ],
      },
      {
        title: "Test3",
        status: "Finish 2/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 2/13" },
          { part: "Part2 Short Answer Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test4",
        status: "Finish 0/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 0/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 18,
    testData: [
      {
        title: "Test1",
        status: "Not started",
        items: [
          { part: "Part1 Identify Completion", status: "Not started" },
          { part: "Part2 Multiple Choice", status: "Not started" },
          { part: "Part3 Short Answer Matching", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test2",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Matching", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Short Answer Matching", status: "Not started" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 17,
    testData: [
      {
        title: "Test1",
        status: "Score: 2.5",
        items: [
          { part: "Part1 Multiple Choice", status: "Correct 6/13" },
          { part: "Part2 Short Answer Matching", status: "Correct 5/13" },
          { part: "Part3 Identify Completion", status: "Correct 3/14" },
          { part: "Part4 Short Answer Matching", status: "Correct 4/5" },
        ],
      },
      {
        title: "Test2",
        status: "Not started",
        items: [
          { part: "Part1 Identify Completion", status: "Not started" },
          { part: "Part2 Multiple Choice", status: "Not started" },
          { part: "Part3 Short Answer Matching", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 16,
    testData: [
      {
        title: "Test1",
        status: "Score: 3.0",
        items: [
          { part: "Part1 Short Answer Identification", status: "Correct 8/13" },
          { part: "Part2 Short Answer Completion", status: "Correct 4/13" },
          { part: "Part3 Multiple Choice", status: "Correct 9/14" },
          { part: "Part4 Identify Completion", status: "Correct 5/5" },
        ],
      },
      {
        title: "Test2",
        status: "Not started",
        items: [
          { part: "Part1 Identify Completion", status: "Not started" },
          { part: "Part2 Multiple Choice", status: "Not started" },
          { part: "Part3 Short Answer Matching", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 15,
    testData: [
      {
        title: "Test1",
        status: "Score: 3.8",
        items: [
          { part: "Part1 Short Answer Matching", status: "Correct 12/13" },
          { part: "Part2 Multiple Choice", status: "Correct 10/13" },
          { part: "Part3 Identify Completion", status: "Correct 11/14" },
          { part: "Part4 Short Answer Matching", status: "Correct 4/5" },
        ],
      },
      {
        title: "Test2",
        status: "Finish 5/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 5/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 14,
    testData: [
      {
        title: "Test1",
        status: "Score: 3.3",
        items: [
          { part: "Part1 Multiple Choice", status: "Correct 9/13" },
          { part: "Part2 Short Answer Matching", status: "Correct 7/13" },
          { part: "Part3 Identify Completion", status: "Correct 10/14" },
          { part: "Part4 Short Answer Matching", status: "Correct 3/5" },
        ],
      },
      {
        title: "Test2",
        status: "Finish 4/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 4/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 13,
    testData: [
      {
        title: "Test1",
        status: "Score: 4.0",
        items: [
          { part: "Part1 Short Answer Matching", status: "Correct 10/13" },
          { part: "Part2 Short Answer Completion", status: "Correct 8/13" },
          { part: "Part3 Multiple Choice", status: "Correct 10/14" },
          { part: "Part4 Identify Completion", status: "Correct 5/5" },
        ],
      },
      {
        title: "Test2",
        status: "Finish 6/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 6/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 12,
    testData: [
      {
        title: "Test1",
        status: "Score: 4.0",
        items: [
          { part: "Part1 Short Answer Matching", status: "Correct 9/13" },
          { part: "Part2 Short Answer Completion", status: "Correct 7/13" },
          { part: "Part3 Identify Completion", status: "Correct 9/14" },
          { part: "Part4 Short Answer Matching", status: "Correct 4/5" },
        ],
      },
      {
        title: "Test2",
        status: "Finish 4/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 4/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test3",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test4",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 11,
    testData: [
      {
        title: "Test1",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Identification", status: "Not started" },
          { part: "Part2 Multiple Choice", status: "Not started" },
          { part: "Part3 Short Answer Matching", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test2",
        status: "Score: 3.5",
        items: [
          { part: "Part1 Short Answer Identification", status: "Correct 8/13" },
          { part: "Part2 Identify Completion", status: "Correct 6/13" },
          { part: "Part3 Multiple Choice", status: "Correct 10/14" },
          { part: "Part4 Identify Completion", status: "Correct 3/5" },
        ],
      },
      {
        title: "Test3",
        status: "Finish 3/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 3/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test4",
        status: "Finish 0/40",
        items: [
          { part: "Part1 Short Answer Identification", status: "Finish 0/13" },
          { part: "Part2 Identify Completion", status: "Finish 0/13" },
          { part: "Part3 Multiple Choice", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
    ],
  },
  {
    sectionTitle: "LISTENING",
    academicLevel: 10,
    testData: [
      {
        title: "Test1",
        status: "Not started",
        items: [
          { part: "Part1 Identify Completion", status: "Not started" },
          { part: "Part2 Multiple Choice", status: "Not started" },
          { part: "Part3 Short Answer Matching", status: "Not started" },
          { part: "Part4 Identify Completion", status: "Not started" },
        ],
      },
      {
        title: "Test2",
        status: "Not started",
        items: [
          { part: "Part1 Short Answer Matching", status: "Not started" },
          { part: "Part2 Identify Completion", status: "Not started" },
          { part: "Part3 Multiple Choice", status: "Not started" },
          { part: "Part4 Short Answer Matching", status: "Not started" },
        ],
      },
      {
        title: "Test3",
        status: "Finish 0/40",
        items: [
          { part: "Part1 Identify Completion", status: "Finish 0/13" },
          { part: "Part2 Multiple Choice", status: "Finish 0/13" },
          { part: "Part3 Short Answer Matching", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
      {
        title: "Test4",
        status: "Finish 0/40",
        items: [
          { part: "Part1 Identify Completion", status: "Finish 0/13" },
          { part: "Part2 Multiple Choice", status: "Finish 0/13" },
          { part: "Part3 Short Answer Matching", status: "Finish 0/14" },
          { part: "Part4 Identify Completion", status: "Finish 0/5" },
        ],
      },
    ],
  },
];



  return (
    <div className="bg-gray-100 p-2 lg:px-28 lg:py-8 rounded-lg shadow-md text-gray-700 ">
      {sectionDataListening.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="mb-8 bg-gray-800 p-4 rounded-lg text-white"
        >
          {/* Section Header */}
          <div className="px-4 py-2 text-left mb-4">
            <h2 className="text-2xl font-bold">{section.sectionTitle}</h2>
            <p className="text-purple-300 text-lg">
              ACADEMIC{" "}
              <span className="font-bold text-3xl">
                {section.academicLevel}
              </span>
            </p>
          </div>

          {/* Test Cards for each section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
            {section.testData.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md text-gray-700"
              >
                {/* Test Header */}
                <div className="bg-purple-600 text-white text-sm rounded-t-lg p-2">
                  <span>{test.title}</span>
                  <span className="float-right">{test.status}</span>
                </div>

                {/* Test Details */}
                <div className="p-4">
                  {test.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      {/* Icon */}
                      <span
                        className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-white ${
                          item.status.includes("Not started")
                            ? "bg-blue-500"
                            : item.status.includes("Correct")
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {item.status.includes("Not started") && (
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6h2v3h3v2h-3v3h-2v-3H6V9h3z" />
                          </svg>
                        )}
                        {item.status.includes("Correct") && (
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {item.status.includes("Finish") && (
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v14a1 1 0 001.707.707L10 14h6a1 1 0 001-1V4a1 1 0 00-1-1H6zm-1 13h4l2.707 2.707A1 1 0 0012 18H6V15z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>

                      {/* Text */}
                      <div>
                        <p className="text-sm font-medium line-clamp-1">
                          {item.part}
                        </p>
                        <p
                          className={`text-xs ${
                            item.status.includes("Not started")
                              ? "text-gray-400"
                              : item.status.includes("Correct")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
