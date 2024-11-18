import { LikeRepository } from "../repository/like.repository";

const likeRepository = new LikeRepository();

export class LikeService {
  async createLike(data: { commentId: number; postId: number; userId: number }) {
    const alreadyLiked = await likeRepository.checkIfLiked(data.userId, data.commentId);

    if (alreadyLiked) {
      throw new Error('Like already done.');
    }

    return await likeRepository.createLike(data);
  }

  async findLikeById(id: string) {
    return await likeRepository.findLikeById(id);
  }

  async findManyLikes() {
    return await likeRepository.findManyLike();
  }

  async deleteLike(id: string) {
    return await likeRepository.deleteLike(id);
  }
}