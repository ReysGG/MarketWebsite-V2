"use client";
import { Banner } from "@/app/generated/prisma/client";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const SliderImage = ({ banner }: { banner: Banner[] }) => {
  return (
    <div className="w-full aspect-[3/1]">
      <Carousel
        className="[&>div]:overflow-x-hidden [&>div]:[scrollbar-width:none] [&>div]:[-ms-overflow-style:none] [&>div::-webkit-scrollbar]:hidden"
        slideInterval={5000}
      >
        {/* Slide 1 - Bungkus dengan div */}

        {banner.map((item) => (
          <div className="relative w-full h-full">
            <Image
              src={item.image_url}
              alt={item.image_url}
              fill
              className="object-cover rounded-lg"
              key={item.id}
              loader={({ src }) => src}
              loading="eager"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderImage;
