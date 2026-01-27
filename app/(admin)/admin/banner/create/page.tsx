import { CheckLineIcon, EyeIcon } from "@/components/admin/icons";
import { Label } from "@/components/ui/label";

export default function CreateBanner() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">Create Banner</h1>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
          <form action="" className="flex items-center gap-4 py-4">
            <div className="">
              <Label>Upload Gambar</Label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
