import Image from "next/image";
import writeTips from "@/public/images/write-tips.svg";
import slider1 from "@/public/images/slider1.svg";
import thum from "@/public/images/thum.jpg";
import TipsCard from "../components/TipsCard";
import TipsMostPopularCard from "../components/TipsMostPopularCard";

export default function Tips() {
  const tips = [
    {
      title:
        "What would Differentiate you from the Other Candidates while Attempting the Speaking Task?",
      description:
        "A large number ofed Band 7 and not Band 6 or Band 5? There must be some differences in the way these candidates prepare for the exam.",
      image: writeTips,
      category: "speaking",
      slug: "speaking-tips-01s",
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
          {/* <h>Tips Card</h> */}
          {tips.map((tip, index) => (
            <TipsCard
              key={index}
              title={tip.title}
              description={tip.description}
              image={tip.image}
              slug={tip.slug}
              category={tip.category}
              date={tip.date}
            />
          ))}

          {/* <div className="card bg-blue-900 text-white flex mb-2">
            <div className="thumb bg-blue-200 w-44">
              <Image src={writeTips} alt="Profile" className="" />
            </div>
            <div className="details px-4 py-2">
              <h1 className="text-2xl">
                IELTS Portal is a free, comprehensive online platform designed
                to support students preparing for the IELTS
              </h1>
              <p>Description</p>
              <p>Categories</p>
              <p>Date</p>
            </div>
          </div> */}

          {/* <div className="bg-blue-900 text-white mt-5">card</div> */}
        </div>
        <div className="col-span-1">
          <div className="bg-gray-200 p-2 rounded-lg pb-12">
            <h1 className="text-2xl font-semibold text-center pb-2">
              Most popular IELTS tips
            </h1>
            {tips.map((tip, index) => (
              <TipsMostPopularCard
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
