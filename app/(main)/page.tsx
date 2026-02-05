import SliderImage from "@/components/sliderimage";
import prisma from "@/lib/prisma";

export default async function Home() {
  const banner = await prisma.banner.findMany();
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <SliderImage banner={banner} />
      </div>
      <div className="max-w-7xl mx-auto "></div>
    </>
  );
}
