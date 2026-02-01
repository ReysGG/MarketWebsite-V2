import prisma from '@/lib/prisma';
import { del, put } from '@vercel/blob';
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

  try {
    const blob = await put(file.name, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  })

  if(!blob){
    return NextResponse.json({message: 'failed to upload file', status:500})
  }

  await prisma.banner.create({
    data: {
      image_url: blob.url,
      target_url: ''
    }
  })
  console.log(blob)

  return NextResponse.json(blob.url)

  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
  
}

export const DELETE = async (request: Request) => {
  const url = await request.json();
  console.log("url deleted : ", url);

  try {
    await prisma.banner.deleteMany({
      where: {
        image_url: url.url
      }
    })

    const blob = await del(url.url, {
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    console.log("Banner deleted successfully");
    return NextResponse.json({ message: 'Banner deleted successfully' });
  } catch (error) {
    console.log("Failed to delete banner");
    return NextResponse.json({ message: error, status: 500 });
  }
}