import { Request, Response } from "express";
import { UserService } from "../services/User.service";
import { validationResult } from "express-validator";

export class UserController {
  private userService = new UserService();

  public async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, username } = req.body;

    try {
      
    } catch (error) {

    }
  }
}