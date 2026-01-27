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
                        <p className="text-sm text-gray-600">Ukuran Gambar : 1920 x 1080</p>
                        <p className="text-sm text-gray-600">Ukuran File : 2MB</p>
                        <p className="text-sm text-gray-600">Format File : JPG, PNG</p>
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