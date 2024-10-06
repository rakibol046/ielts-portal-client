import Image  from "next/image";
import logo from '@/public/images/logo.svg';
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div>
      <div className="logo p-3 lg:px-28 lg:py-3">
        <Image
          src={logo}
          alt="Picture of the author"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          //   placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
