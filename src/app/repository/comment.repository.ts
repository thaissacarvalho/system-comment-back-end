import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CommentRepository {
  async createComment(data: { authorId: number, text: string; postId: number; parentId?: number }) {
    return await prisma.comment.create({ data });
  }

  async findManyComment() {
    const comments = await prisma.comment.findMany({
      include: {
        replies: true,
        _count: {
          select: { replies: true, Like: true },
        },
      },
    });
    return comments.map(comment => ({
      ...comment,
      isParent: !comment.parentId,
    }));
  }

  async findCommentById(id: string) {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
      include: {
        replies: true,
        Like: true,
        _count: {
          select: {
            replies: true,
            Like: true
          },
        },
      },
    });
    if (!comment) return null;
    return {
      ...comment,
      isParent: !comment.parentId,
    };
  }

  async deleteComment(id: string) {
    return await prisma.comment.delete({ where: { id: Number(id) } });
  }
}
