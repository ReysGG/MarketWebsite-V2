"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { PutBlobResult } from "@vercel/blob";
import { Button } from "flowbite-react";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import ModalFunction from "../modal";
import { Banner } from "@/app/generated/prisma/client";
import { form } from "@heroui/theme";

export function FileUploadUpdate({ banner }: { banner: Banner }) {
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState<string>("");
  const [GambarSudahAda, setGambarSudahAda] = useState<string>(
    banner.image_url,
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleFileUpload = async (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const handleDelete = async (urlLink: string) => {
    if (!urlLink) {
      setFiles([]);
      setUrl("");
      console.log("No URL to delete");
      return;
    }

    const response = await fetch("/api/upload/banner", {
      method: "DELETE",
      body: JSON.stringify({ url: urlLink }),
    });

    const data = await response.json();
    console.log(data);

    setUrl("");
    setFiles([]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      console.log("Proses Upload");
      const formData = new FormData();
      console.log(formData);
      formData.append("files", files[0]);
      formData.append("id", banner.id.toString());
      formData.append("url", banner.image_url);

      const response = await fetch("/api/upload/banner", {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setUrl(data);
      setLoading(false);
      setIsModalOpen(true);
      console.log(data);
    } catch (error: any) {
      setError(error.message as string);
      setLoading(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FileUpload onChange={handleFileUpload} files={files} />
      {files.length > 0 && (
        <div className="w-full gap-4 mt-4">
          <div className="w-full flex justify-center gap-4 mt-4 mb-4">
            <Button
              onClick={() => {
                handleUpload();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              disabled={loading}
            >
              Upload
            </Button>
            <Button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleDelete(url)}
            >
              Delete
            </Button>
          </div>
          {url && (
            <>
              <p className="text-green-500 text-center">Success Upload</p>
              <ModalFunction
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                url={"/admin/banner"}
              />
            </>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      )}
    </>
  );
}
