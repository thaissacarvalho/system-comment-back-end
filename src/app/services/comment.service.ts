import { CommentRepository } from "../repository/comment.repository";

const commentRepository = new CommentRepository();

export class CommentService {
  async createComment(data: { authorId: number; text: string; postId: number; parentId?: number }) {
    if (!data.text || !data.postId) {
      throw new Error('Text and postId are required');
    }

    return await commentRepository.createComment(data);
  }

  async findCommentById(id: string) {
    return await commentRepository.findCommentById(id);
  }

  async findManyComment() {
    return await commentRepository.findManyComment();
  }

  async deleteComment(id: string) {
    return await commentRepository.deleteComment(id);
  }
}
