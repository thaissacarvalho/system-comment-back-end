import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LikeRepository {
  async checkIfLiked(userId: number, commentId: number): Promise<boolean> {
    const like = await prisma.like.findUnique({
      where: {
        userId_commentId: {
          userId,
          commentId
        }
      }
    });
    return like !== null; 
  }
  
  async createLike(data: { commentId: number; postId: number, userId: number; }) {
    return await prisma.like.create({ data });
  }

  async findManyLike() {
    return await prisma.like.findMany();
  }

  async findLikeById(id: string) {
    return await prisma.like.findUnique({ where: { id: Number(id) } });
  }

  async deleteLike(id: string) {
    return await prisma.like.delete({ where: { id: Number(id) } })
  }
}