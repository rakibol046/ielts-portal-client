import Image from "next/image";
import slider1 from "@/public/images/slider1.svg";
import Carousel from "@/app/components/home/Carousel"
import Categories from "@/app/components/home/Categories"

export default function Home() {
  return (
    <div>
      {/* <Image
        src={slider1}
        alt="Profile"
        className="w-full absolate top-1"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur"
      /> */}
      <div className="p-2 lg:px-28 lg:py-20">
        <Categories />
      </div>
    </div>
  );
}
