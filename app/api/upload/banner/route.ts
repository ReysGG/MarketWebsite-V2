import prisma from '@/lib/prisma';
import { put } from '@vercel/blob';
import { request } from 'http';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData();
  console.log(formData)

  const file = formData.get('files') as File;
  const MAX_SIZE = 5 * 1024 * 1024;

  if (file.size > MAX_SIZE){
    return NextResponse.json({ message: 'File size must be less than 5MB' }, { status: 400 });
  }

  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ message: 'File type must be .jpg or .png' }, { status: 400 });
  }

  const blob = await put(file.name, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  })

  if(!blob){
    return NextResponse.json({message: 'failed to upload file', status:500})
  }

  prisma.banner.create({
    data: {
      image_url: blob.url,
      target_url: ''
    }
  })
  console.log(blob)

  return NextResponse.json(blob.url)
}

export const DELETE = async (request: Request) => {
  const url = await request.json();
  console.log(url);

  

  return NextResponse.json({ message: 'Banner deleted successfully' });
}