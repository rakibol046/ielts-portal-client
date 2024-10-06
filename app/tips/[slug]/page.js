import Image from "next/image";
import writeTips from "@/public/images/write-tips.svg";
import slider1 from "@/public/images/slider1.svg";
import thum from "@/public/images/thum.jpg";

import TipsRelatedCard from "@/app/components/TipsRelatedCard";

export default function Tips({ params }) {
  const tips = [
    {
      title:
        "What would Differentiate you from the Other Candidates while Attempting the Speaking Task?",
      description:
        "A large number ofed Band 7 and not Band 6 or Band 5? There must be some differences in the way these candidates prepare for the exam.",
      image: writeTips,
      category: "speaking",
      slug: "wringn dsfkdf eiew saceo",
      date: "02/09/2024",
    },
    {
      title:
        "IELTS speaking test but their band in the way these candidates prepare for the examin the way these candidates prepare for the examin the way these candidates prepare for the exam",
      description:
        "in the way these candidates prepare for the exam in the way these candidates prepare for the examin the way these candidates prepare for the examin the way these candidates prepare for the examin the way these candidates prepare for the exam.",
      image: thum,
      category: "speaking",
      slug: "speaking-tips-01s",
      date: "08/03/2023",
    },
    {
      title: "IELTS speaking test but their band",
      description: "in the way these candidates prepare for the exam.",
      image: slider1,
      category: "speaking",
      slug: "speaking-tips-01s",
      date: "08/03/2023",
    },
  ];
  return (
    <div className="p-2 lg:px-28 lg:py-8">
      {/* <Image
        src={slider1}
        alt="Profile"
        className="w-full absolate top-1"
      /> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
        <div className="col-span-2">
          <figure className="flex-none bg-slate-400">
            <Image
              src={thum}
              alt="card image"
              className=" object-cover aspect-auto"
              //   width="200"
              //   height="100"
            />
          </figure>
          <h1 className="text-2xl font-bold mt-4 mb-2">{tips[0].title}</h1>
          <div className="tag-date flex justify-between text-gray-500">
            <p>{tips[0].category}</p>
            <p>{tips[0].date}</p>
          </div>
          <div className="my-4">{tips[0].description} </div>
        </div>
        <div className="col-span-1">
          <div className="bg-gray-200 p-2 rounded-lg pb-12">
            <h1 className="text-2xl font-semibold text-center pb-2">
              Related IELTS Tips
            </h1>
            {tips.map((tip, index) => (
              <TipsRelatedCard
                key={index}
                title={tip.title}
                description={tip.description}
                image={tip.image}
                slug={tip.slug}
                category={tip.category}
                date={tip.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
