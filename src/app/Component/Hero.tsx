import Link from "next/link";

import hero from "@/../public/hero.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto bg-[#1313130D] rounded-md py-[80px]">
      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-x-20 items-center">
        <div className="lg:w-1/3">
          <h1 className="text-[54px] font-bold leading-[80px] mb-10">
            Books to freshen up your bookshelf
          </h1>
          <Link
            href="/"
            className="text-[20px] font-medium text-white bg-[#23BE0A] rounded-md px-[28px] py-[18px]"
          >
            View The List
          </Link>
        </div>
        <Image src={hero} width={500} height={500} alt="hero image"></Image>
      </div>
    </div>
  );
};

export default HeroSection;
