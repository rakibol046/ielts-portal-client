import Image from "next/image";
import Link from "next/link";
const TipsCard = ({ title, description, image, slug, category, date }) => {
  return (
    <>
      <Link
        href={`tips/${slug}`}
        className="flex flex-row overflow-hidden bg-white rounded shadow-md shadow-slate-200 "
      >
        {/*  <!-- Image --> */}
        <figure className="flex-none align-middle">
          <Image
            src={image}
            alt="card image"
            className="h-24 w-24 object-cover aspect-auto "
            //   width="200"
            //   height="100"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-2 sm:mx-6 sm:px-0">
          <h1 className="text-sm line-clamp-2 font-bold ">{title}</h1>
          <p className="text-xs line-clamp-2 text-gray-500">{description}</p>
          <p className="text-xs text-gray-500">{category}</p>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default TipsCard;
