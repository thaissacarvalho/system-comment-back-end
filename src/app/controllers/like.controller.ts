import { Request, Response } from "express";
import { LikeService } from "../services/like.service";

export class LikeController {
  private likeService: LikeService;

  constructor() {
    this.likeService = new LikeService();
  }

  public async registerLike(req: Request, res: Response): Promise<any> {
    const { commentId, postId, userId } = req.body;

    try {
      const newLike = await this.likeService.createLike({ commentId, postId, userId });
      return res.status(201).json(newLike);
    } catch (error) {
      console.log('Error registering like: ', error);
      return res.status(501).json({ error: 'Error registering like.' });
    }
  }

  public async findLikeById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if(!id) {
      return res.status(400).json({ message: "ID required." })
    }

    try {
      const searchLike = await this.likeService.findLikeById(id);
      return res.status(202).json(searchLike);
    } catch (error) {
      console.log('Error find like: ', error);
      return res.status(501).json({ error: 'Error find like.' });
    }
  }

  public async findManyLike(req: Request, res: Response): Promise<any> {
    try {
      const manyLikes = await this.likeService.findManyLikes();
      return res.status(200).json(manyLikes); 
    } catch (error) {
      console.log('Error find all likes: ', error);
      return res.status(501).json({ error: 'Error find all likes.' });
    }
  }

  public async deleteLike(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if(!id) {
      return res.status(400).json({ message: "ID required." })
    }

    try {
      const deleteLike = await this.likeService.deleteLike(id);
      return res.status(202).json(deleteLike);
    } catch (error) {
      console.log('Error delete like: ', error);
      return res.status(501).json({ error: 'Error delete like.' });
    }
  }
}