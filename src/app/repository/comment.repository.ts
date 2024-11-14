import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CommentRepository {
  async createComment(data: { text: string; postId: number; parentId?: number }) {
    return await prisma.comment.create({ data });
  }

  async findManyComment() {
    const comments = await prisma.comment.findMany({
      include: {
        replies: true,
        _count: {
          select: { replies: true }, // Conta o número de replies
        },
      },
    });
    return comments.map(comment => ({
      ...comment,
      isParent: !comment.parentId, // Define se é um comentário principal
    }));
  }

  async findCommentById(id: string) {
    const comment = await prisma.comment.findUnique({
      where: { id: Number(id) },
      include: {
        replies: true,
        Like: true,
        Deslike: true,
        _count: {
          select: { replies: true }, // Conta o número de replies
        },
      },
    });
    if (!comment) return null; // Verifica se o comentário existe
    return {
      ...comment,
      isParent: !comment.parentId, // Define se é um comentário principal
    };
  }

  async deleteComment(id: string) {
    return await prisma.comment.delete({ where: { id: Number(id) } });
  }
}
