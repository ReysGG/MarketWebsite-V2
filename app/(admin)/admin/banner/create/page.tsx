import SliderImage from "@/components/sliderimage";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <>
      <div className="gap-8">
        <div className="flex justify-between items-center gap-4 mb-4">
          <h1 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white/90">
            Banner Management
          </h1>
          <div className="flex gap-4">
            <Button className="bg-brand-500 text-white dark:bg-brand-500 dark:text-white px-4 py-2 rounded-md">
              Add Banner
            </Button>
            <Button
              variant={"outline"}
              className="border-red-500 text-red-500 dark:border-red-500 dark:text-red-500 px-4 py-2 rounded-md"
            >
              Delete Banner
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <SliderImage></SliderImage>
          <div className="flex justify-between w-full items-center gap-4">
            <p className="text-center dark:text-white">Total Image</p>
            <p className="text-center dark:text-white">2</p>
          </div>
        </div>
      </div>
    </>
  );
}
