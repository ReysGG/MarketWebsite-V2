"use client";
import Image from "next/image";
import DropdownFunction from "./ui/dropdown";
import { Banner } from "@/app/generated/prisma/client";
import { FileBadge, Link2Icon } from "lucide-react";
import { IconAdjustmentsStar } from "@tabler/icons-react";
import { StarIcon } from "flowbite-react";

export const DeleteImage = ({ banner }: { banner?: Banner[] }) => {
  return (
    <>
      <div className="gap-2">
        <div className="flex gap-4 w-full mb-2  py-6 border-b-2 border-gray-500 dark:border-gray-500">
          <Image
            src={banner?.[0]?.image_url || "/placeholder.png"}
            alt="banner1"
            width={300}
            height={300}
            loader={({ src }) => src}
            loading="eager"
          />
          <div className="flex flex-col text-gray-800 dark:text-gray-200 justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <FileBadge />
                  <p>Name : </p>
                </div>
                <p>{banner?.[0]?.name || "No Name"}</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <Link2Icon />
                  <p>URL : </p>
                </div>
                <p>{banner?.[0]?.image_url || "No URL"}</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <StarIcon />
                  <p>Position : </p>
                </div>
                <p>{banner?.[0]?.position || "No Position"}</p>
              </div>
            </div>
            <div className="flex gap-4 justify-end">
              <DropdownFunction />
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full mb-2  py-6 border-b-2 border-gray-500 dark:border-gray-500">
          <Image
            src={banner?.[0]?.image_url || "/placeholder.png"}
            alt="banner1"
            width={300}
            height={300}
            loader={({ src }) => src}
            loading="eager"
          />
          <div className="flex flex-col text-gray-800 dark:text-gray-200 justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <FileBadge />
                  <p>Name : </p>
                </div>
                <p>{banner?.[0]?.name || "No Name"}</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <Link2Icon />
                  <p>URL : </p>
                </div>
                <p>{banner?.[0]?.image_url || "No URL"}</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center font-bold gap-2">
                  <StarIcon />
                  <p>Position : </p>
                </div>
                <p>{banner?.[0]?.position || "No Position"}</p>
              </div>
            </div>
            <div className="flex gap-4 justify-end">
              <DropdownFunction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
