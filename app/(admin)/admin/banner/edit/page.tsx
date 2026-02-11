import { DeleteImage } from "@/components/imagedelete";
import { getBannerDB } from "@/lib/databasefunction/getBannerDB";

export default async function DeleteBanner() {
  const banner = await getBannerDB();
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Delete Banner</h1>
        <a
          href="/admin/banner"
          className="border border-gray-500 text-gray-500 dark:border-gray-500 dark:text-gray-500 px-4 py-1 rounded-md cursor-pointer"
        >
          Back ?
        </a>
      </div>

      <div className="p-4 mt-4">
        <DeleteImage banner={banner}></DeleteImage>
      </div>
    </>
  );
}
