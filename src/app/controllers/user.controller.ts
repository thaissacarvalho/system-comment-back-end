import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { validationResult } from "express-validator";

export class UserController {
  private userService = new UserService();

  public async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { name, username } = req.body;

    try {
      const newUser = await this.userService.createUser({ name, username });
      res.status(201).json(newUser);
      return;
    } catch (error) {
      res.status(501).json({ error: 'Error registering user' });
      return;
    }
  }
}