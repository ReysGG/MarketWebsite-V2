"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { PutBlobResult } from "@vercel/blob";
import { Button } from "flowbite-react";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState<string>("");
  const handleFileUpload = async (files: File[]) => {
    setFiles(files);
    console.log(files);

    if (files.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append("files", files[0]);

    const response = await fetch("/api/upload/banner", {
      method: "POST",
      body: formData,
    });

    const newBlob = (await response.json()) as PutBlobResult;
    setUrl(newBlob.url);
  };

  const handleDelete = async (urlLink: string) => {
    const response = await fetch("/api/upload/banner", {
      method: "DELETE",
      body: JSON.stringify({ url: urlLink }),
    });

    const data = await response.json();
    console.log(data);

    setUrl("");
    setFiles([]);
  }

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      {url && (
        <div className="w-full flex justify-center gap-4">
          <Button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => handleDelete(url)}>Delete</Button>
          <Button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Finish</Button>
        </div>
      )}
    </div>
  );
}
