// components/Footer.js
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "@/public/images/icon/fullscreen.svg"; // Replace with actual paths
import youtubeIcon from "@/public/images/icon/fullscreen.svg"; // Replace with actual paths

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="px-4 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="col-span-1">
            <h2 className="font-bold text-2xl mb-2">Stay Practice</h2>
            <ul className="space-y-4 font-bold text-md">
              <li>
                <Link href="/">Listening</Link>
              </li>
              <li>
                <Link href="/">Reading</Link>
              </li>
              <li>
                <Link href="/">Writing</Link>
              </li>
              <li>
                <Link href="/">Speaking</Link>
              </li>
              <li>
                <Link href="/">Mock Test</Link>
              </li>
              <li>
                <Link href="/">IELTS Tips</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-2">
            <h2 className="font-bold text-2xl mb-2">About IELTS Portal</h2>
            <p>
              IELTS Portal is a free, comprehensive online platform designed to
              support students preparing for the IELTS computer-based exam. It
              offers a variety of mock tests, individual module practice,
              full-length tests, and valuable tips and strategies to help
              students excel. With a user-friendly interface and interactive
              resources, IELTS Portal aims to provide an effective learning
              environment for students looking to achieve higher band scores.
            </p>
            <h2 className="font-bold text-2xl mt-4 mb-2">Mission</h2>
            <p>
              IELTS Portal mission is to empower students worldwide by providing
              accessible, high-quality IELTS preparation resources that are
              completely free of charge. We strive to help students enhance
              their skills, build confidence, and achieve their desired IELTS
              scores through a comprehensive learning platform that focuses on
              practice, guidance, and support.
            </p>

            <h2 className="font-bold text-2xl mt-4 mb-2">Follow the owner:</h2>
            <div className="flex space-x-4">
              <Link href="/">
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="/">
                <Image src={youtubeIcon} alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-sm text-center border-t border-white pt-4">
          <p>© 2024 IELTS Portal | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
