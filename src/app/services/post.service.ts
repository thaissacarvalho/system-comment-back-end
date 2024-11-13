import { PostRepository } from '../repository/post.repository';

const postRepository = new PostRepository();

export class PostService {
  async createPost(data: { authorId: number; title: string; text: string }) {
    return await postRepository.createPost(data);
  }

  async findUserById(id: string) {
    return await postRepository.findPostById(id);
  }

  async findManyPost() {
    return await postRepository.findManyPost();
  }

  async deletePost(id: string) {
    return await postRepository.deletePost(id);
  }
}
