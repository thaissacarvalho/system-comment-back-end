import { Request, Response } from 'express';
import { PostService } from '../services/post.service';

export class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public async registerPost(req: Request, res: Response): Promise<any> {
    const { authorId, title, text } = req.body;

    try {
      const createPost = await this.postService.createPost({
        authorId,
        title,
        text,
      });
      return res.status(200).json(createPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating Post.' });
    }
  }

  public async findPosts(req: Request, res: Response): Promise<any> {
    try {
      const findMany = await this.postService.findManyPost();
      return res.status(200).json(findMany);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error in finding all posts.' });
    }
  }

  public async findPostById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    try {
      const findPost = await this.postService.findPostById(id);
      return res.status(200).json(findPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error in finding posts.' });
    }
  }

  public async deletePost(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({ message: 'ID is required' });
    }

    try {
      const deletedPost = await this.postService.deletePost(id);
      return res.status(200).json(deletedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting post' });
    }
  }
}
