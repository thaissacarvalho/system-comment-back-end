import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PostRepository {
  async createPost(data: { authorId: number; title: string; text: string }) {
    return await prisma.post.create({ data });
  }

  async findManyPost() {
    return await prisma.post.findMany();
  }

  async findPostById(id: string) {
    return await prisma.post.findUnique({ where: { id: Number(id) } });
  }

  async deletePost(id: string) {
    return await prisma.post.delete({ where: { id: Number(id) } });
  }
}
