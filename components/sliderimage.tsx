"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const SliderImage = () => {
  return (
    <div className="w-full aspect-[3/1]">
      <Carousel
        className="[&>div]:overflow-x-hidden [&>div]:[scrollbar-width:none] [&>div]:[-ms-overflow-style:none] [&>div::-webkit-scrollbar]:hidden"
        slideInterval={5000}
      >
        {/* Slide 1 - Bungkus dengan div */}
        <div className="relative w-full h-full">
          <Image
            src="https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.webp?b=1&s=612x612&w=0&k=20&c=-7tro3UbbvFxXEXlOIZNH7i_C4QQ1LI3jTsPnfi2mNU="
            alt="Slide 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Slide 2 - Bungkus dengan div */}
        <div className="relative w-full h-full">
          <Image
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
            alt="Slide 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderImage;
