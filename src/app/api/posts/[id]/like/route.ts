import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }   // ← 必须这样写
) {
  try {
    // 必须 await 解包 params
    const { id } = await context.params;

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        likes: { increment: 1 }
      }
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Like API error:', error);
    return NextResponse.json(
      { error: 'Failed to update like' }, 
      { status: 500 }
    );
  }
}