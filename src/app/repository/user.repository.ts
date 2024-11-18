import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
  // Método para criar um usuário
  async createUser(data: { name: string; username: string }) {
    return await prisma.user.create({ data });
  }

  // Método para encontrar um usuário por ID
  async findUserById(id: string) {
    return await prisma.user.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        posts: true,
        likes: true,
        _count: {
          select: {
            posts: true,
            likes: true,
          },
        }
      }
    })
  };

  async findUserByUsername(username: string) {
    return await prisma.user.findUnique({
      where: { username }, include: {
        posts: true,
        likes: true,
        _count: {
          select: {
            posts: true,
            likes: true,
          },
        }
      }
    });
  }

  // Método para listar todos os usuários
  async findManyUser() {
    return await prisma.user.findMany();
  }

  // Método para atualizar um usuário
  async updateUser(id: number, data: { name?: string; username?: string }) {
    return await prisma.user.update({ where: { id }, data });
  }

  // Método para deletar um usuário
  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id: Number(id) } });
  }
}
