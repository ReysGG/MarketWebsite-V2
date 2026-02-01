"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { PutBlobResult } from "@vercel/blob";
import { Button } from "flowbite-react";
import prisma from "@/lib/prisma";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [url, setUrl] = useState<string>("");
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
      console.log(formData);

      const response = await fetch("/api/upload/banner", {
        method: "POST",
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
      console.log(data);
    } catch (error: any) {
      setError(error.message as string);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} files={files} />
      {files.length > 0 && (
        <div className="w-full gap-4 mt-4">
          <div className="w-full flex justify-center gap-4 mt-4 mb-4">
            <Button
              onClick={() => handleUpload()}
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
          {url && <p className="text-green-500 text-center">Success Upload</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      )}
    </div>
  );
}
