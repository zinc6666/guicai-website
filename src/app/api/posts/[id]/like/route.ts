import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const {id} = await params;
    
    // Increment likes atomically
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        likes: {
          increment: 1
        }
      }
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update like' }, { status: 500 });
  }
}