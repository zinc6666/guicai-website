import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    const author = formData.get('author') as string;
    const message = formData.get('message') as string;

    if (!file || !author || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Convert to base64 string
    const base64Data = buffer.toString('base64');
    const mimeType = file.type || 'image/jpeg';
    const imageBase64 = `data:${mimeType};base64,${base64Data}`;

    // Save to database with the base64 string directly
    const newPost = await prisma.post.create({
      data: {
        imageUrl: imageBase64, // Store the base64 string directly in imageUrl for easier rendering
        imageBase64: imageBase64,
        author,
        message,
        likes: 0
      }
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}