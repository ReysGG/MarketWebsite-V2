import { CheckLineIcon, EyeIcon } from "@/components/admin/icons";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";
import { FileUploadDemo } from "@/components/uploadbanner";
import prisma from "@/lib/prisma";
import { IconUpload } from "@tabler/icons-react";
import { notFound } from "next/navigation";

export default async function EditBanner({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bannerId = parseInt(id);
  const banner = await prisma.banner.findUnique({
    where: {
      id: bannerId,
    },
  });
  console.log(banner);

  if (!banner) notFound();
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">Edit Banner</h1>
      <div className="border border-gray-200 rounded-lg p-4 mt-4">
        <div className="">
          <div className="flex items-center gap-2">
            <EyeIcon></EyeIcon>
            <h1 className="font-semibold">Ketentuan Upload Banner</h1>
          </div>
          <div className="gap-8">
            <h2 className="mb-2 text-lg font-medium text-heading">
              Image Requirements:
            </h2>
            <ul className="max-w-md space-y-1 text-body list-inside">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-fg-success me-1.5 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Image size must be 1920 x 1080 pixels
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-fg-success me-1.5 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Image format must be .jpg or .png
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-body me-1.5 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Max size 5MB
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg px-6 mt-4">
          <div className="w-full">
            <FileUploadDemo />
          </div>
        </div>
      </div>
    </>
  );
}
