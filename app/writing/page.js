import WritingTask from "@/app/components/WritingTask";
import Link from "next/link";
const writing = () => {
  const writingData = [
    {
      title: "Cambridge 19 test 1",
      academicLevel: 19,
      test: 1,
      task1: {
        text: "Write a pic chart",
        image: "",
      },
      task2: {
        text: "what is you opinion",
        image: "",
      },
    },
    {
      title: "Cambridge 19 test 2",
      academicLevel: 19,
      test: 2,
      task1: {
        text: "",
        image: "",
      },
      task2: {
        text: "",
        image: "",
      },
    },
    {
      title: "Cambridge 19 test 3",
      academicLevel: 19,
      test: 3,
      task1: {
        text: "",
        image: "",
      },
      task2: {
        text: "",
        image: "",
      },
    },
    {
      title: "Cambridge 19 test 4",
      academicLevel: 19,
      test: 4,
      task1: {
        text: "",
        image: "",
      },
      task2: {
        text: "",
        image: "",
      },
    },
  ];
  return (
    <div className="p-2 lg:px-28 lg:py-8 ">
      <div className=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 bg-white rounded shadow-md shadow-slate-200">
        <div className="col-span-4 bg-slate-300">
          <ul className="divide-y divide-slate-100 col-span-1">
            {writingData.map((test, index) => (
              <li key={index} className="flex items-start gap-4 px-4 py-3">
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <h4 className="text-base text-slate-700 ">{test.title}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-8">
          <WritingTask />
          <div className="text-center mt-12">
            <Link
              className="bg-orange-300 p-2 rounded-md border border-slate-300 hover:border-slate-400"
              href=""
            >
              Start Writing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default writing;
