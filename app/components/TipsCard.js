import Image from "next/image";
import Link from "next/link";
const TipsCard = ({ title, description, image, slug, category, date }) => {
  return (
    <Link
      href={`tips/${slug}`}
      className="flex flex-row overflow-hidden mb-4 bg-white rounded shadow-md shadow-slate-200 "
    >
      {/*  <!-- Image --> */}
      <figure className="flex-none bg-slate-400">
        <Image
          src={image}
          alt="card image"
          className="h-28 w-36 lg:h-32 lg:w-56 object-cover aspect-auto"
          //   width="200"
          //   height="100"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-2 sm:mx-6 sm:px-0">
        <h1 className="text-md lg:text-xl line-clamp-2 font-bold ">{title}</h1>
        <p className="text-gray-500">{category}</p>
        <p className="text-gray-500">{date}</p>
      </div>
    </Link>
  );
};

export default TipsCard;
