import { Banner } from "@/app/generated/prisma/client";
import { FileUploadUpdate } from "@/components/updatecomponent/uploadbanner";
import prisma from "@/lib/prisma";
import { Button } from "flowbite-react";
import { EyeIcon, ListIcon, UploadIcon } from "lucide-react";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

export default async function EditBanner({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bannerId = parseInt(id);
  const banner: Banner | null = await prisma.banner.findUnique({
    where: {
      id: bannerId,
    },
  });

  if (!banner) notFound();

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Edit Banner</h1>
        <a
          href="/admin/banner/edit"
          className="border border-gray-500 text-gray-500 dark:border-gray-500 dark:text-gray-500 px-4 py-1 rounded-md cursor-pointer"
        >
          Back ?
        </a>
      </div>

      {/* Current Banner Preview */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
            <EyeIcon className="w-4 h-4" />
            Banner Saat Ini
          </h2>
        </div>
        <div className="relative aspect-16/5 w-full bg-gray-100">
          <Image
            src={banner.image_url}
            alt={banner.name || "Banner"}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </div>

      {/* Requirements + Upload */}
      <div className="border border-gray-200 rounded-xl p-5 space-y-5">
        {/* Compact Requirements */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center gap-2">
            <ListIcon className="w-4 h-4" />
            Ketentuan Upload
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              1920 × 1080 px
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Format .jpg / .png
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-200">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Max 5 MB
            </span>
          </div>
        </div>

        {/* Upload Area */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3 flex items-center gap-2">
            <UploadIcon className="w-4 h-4" />
            Upload Gambar Baru
          </h2>
          <FileUploadUpdate banner={banner} />
        </div>
      </div>
    </div>
  );
}
