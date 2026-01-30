import prisma from '@/lib/prisma';
import { put } from '@vercel/blob';
import { request } from 'http';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData();
  const file = formData.get('files') as File;

  try {
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const blob = await put(file.name, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    await prisma.banner.create({
      data: {
        image_url: blob.url,
        target_url: formData.get('target_url') as string,
        position: 0,
        is_active: true,
      }
    })

    return NextResponse.json(blob);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}

export const DELETE = async (request: Request) => {
  const url = await request.json();
  console.log(url);

  try {
    await prisma.banner.delete({
      where: {
        image_url: url.url as string,
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete banner' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Banner deleted successfully' });
}