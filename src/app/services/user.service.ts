import { UserRepository } from "../repository/user.repository";

const userRepository = new UserRepository();

export class UserService {
  static async createUser(data: { name: string; username: string }) {
    return await userRepository.createUser(data);
  }

  static async findUserById(id: string) {
    return await userRepository.findUserById(id);
  }

  static async findUserByUsername(username: string) {
    return await userRepository.findUserByUsername(username);
  }

  static async findManyUser() {
    return await userRepository.findManyUser();
  }

  static async updateUser(id: number, data: { name?: string; username?: string }) {
    return await userRepository.updateUser(id, data);
  }

  static async deleteUser(id: string) {
    return await userRepository.deleteUser(id);
  }
}