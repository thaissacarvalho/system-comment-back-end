import { Request, Response } from "express";
import { CommentService } from "../services/comment.service";

export class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  public async registerComment(req: Request, res: Response): Promise<any> {
    const { authorId, text, postId, parentId } = req.body;

    try {
      const createComment = await this.commentService.createComment({
        authorId,
        text,
        postId, 
        parentId: parentId ?? false,
      });
      return res.status(200).json(createComment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating comment.' });
    }
  }

  public async findComments(req: Request, res: Response): Promise<any> {
    try {
      const findMany = await this.commentService.findManyComment();
      return res.status(200).json(findMany);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error in finding all comments.' });
    }
  }

  public async findCommentById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'ID is required' });
    }

    try {
      const findComment = await this.commentService.findCommentById(id);
      return res.status(200).json(findComment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error in finding comments.' });
    }
  }

  public async deleteComment(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({ message: 'ID is required' });
    }

    try {
      const deletedComment = await this.commentService.deleteComment(id);
      return res.status(200).json(deletedComment);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting comment.' });
    }
  }
}