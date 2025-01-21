import React from "react";

export default function Listening() {

  const loginSystem = false;
  const sectionDataListening = [
    {
      sectionTitle: "LISTENING",
      academicLevel: 19,
      testData: [
        {
          title: "Test1",
          status: false,
          band: "",
          score: {
            correct: null,
            finish: null,
            wrong: null,
            total: null,
          },
        },
        {
          title: "Test2",
          status: true,
          band: "7.5",
          score: {
            correct: 31,
            finish: 35,
            wrong: 3,
            total: 40,
          },
        },
        {
          title: "Test3",
          status: false,
          band: "7.5",
          score: {
            correct: 31,
            finish: 35,
            wrong: 3,
            total: 40,
          },
        },
        {
          title: "Test4",
          status: false,
          band: "7.5",
          score: {
            correct: 31,
            finish: 35,
            wrong: 3,
            total: 40,
          },
        },
      ],
    },
    {
      sectionTitle: "LISTENING",
      academicLevel: 18,
      testData: [
        {
          title: "Test1",
          status: true,
          band: "3.0",
          score: {
            correct: 10,
            finish: 40,
            wrong: 30,
            total: 40,
          },
        },
        {
          title: "Test2",
          status: true,
          band: "6.5",
          score: {
            correct: 23,
            finish: 35,
            wrong: 7,
            total: 40,
          },
        },
        {
          title: "Test3",
          status: false,
          band: "7.5",
          score: {
            correct: 31,
            finish: 35,
            wrong: 3,
            total: 40,
          },
        },
        {
          title: "Test4",
          status: false,
          band: "7.5",
          score: {
            correct: 31,
            finish: 35,
            wrong: 3,
            total: 40,
          },
        },
      ],
    },
  ];

  return (
    <div className="p-2 lg:px-28 lg:py-8 rounded-lg shadow-md text-gray-700 ">
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
                  {loginSystem ? (
                    <span className="float-right">
                      {test.status
                        ? `Finish ${test?.score?.finish}/${test?.score?.total}`
                        : "Not started"}
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                {/* Test Details */}
                <div className="p-4">
                  { loginSystem? test.status ? (
                    <div>
                      <p className="text-3xl mb-2 text-center">{test?.band}</p>
                      <div className="flex justify-between">
                        <div>
                          <span
                            className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-white bg-green-500`}
                          >
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
                          </span>
                          <span className="text-green-500">
                            {" "}
                            Correct {test?.score?.correct}/{test?.score?.total}
                          </span>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-white bg-red-500`}
                          >
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
                          </span>
                          <span className="text-red-500">
                            {" "}
                            Wrong : {test?.score?.wrong}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <figure className="grid justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#434343"
                        >
                          <path d="M326.67-326.67h66.66v-306.66h-66.66v306.66Zm160-6L708-480 486.67-627.33v294.66ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
                        </svg>
                      </figure>
                      <span>Not Started</span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <figure className="grid justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="40px"
                          viewBox="0 -960 960 960"
                          width="40px"
                          fill="#434343"
                        >
                          <path d="M326.67-326.67h66.66v-306.66h-66.66v306.66Zm160-6L708-480 486.67-627.33v294.66ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
                        </svg>
                      </figure>
                      <span>Take test</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
