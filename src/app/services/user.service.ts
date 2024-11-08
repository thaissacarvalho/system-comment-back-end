import { UserRepository } from "../repository/user.repository";

const userRepository = new UserRepository();

export class UserService {
  async createUser(data: { name: string; username: string }) {
    return await userRepository.createUser(data);
  }

  async findUserById(id: string) {
    return await userRepository.findUserById(id);
  }

  async findUserByUsername(username: string) {
    return await userRepository.findUserByUsername(username);
  }

  async findManyUser() {
    return await userRepository.findManyUser();
  }

  async updateUser(id: number, data: { name?: string; username?: string }) {
    return await userRepository.updateUser(id, data);
  }

  async deleteUser(id: string) {
    return await userRepository.deleteUser(id);
  }
}