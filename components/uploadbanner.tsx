"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { PutBlobResult } from "@vercel/blob";

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

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
