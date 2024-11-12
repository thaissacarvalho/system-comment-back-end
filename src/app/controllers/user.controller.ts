import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { validationResult } from "express-validator";

export class UserController {
  private userService: UserService; // Defina explicitamente o tipo

  constructor() {
    this.userService = new UserService(); // Certifique-se de que a instância está sendo criada corretamente
  }

  public async register(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg); // Extraímos apenas o campo "msg"
      res.status(400).json({ errors: errorMessages });
      return;
    }

    const { name, username } = req.body;

    try {
      const newUser = await this.userService.createUser({ name, username });
      res.status(201).json(newUser);
      return;
    } catch (error) {
      console.error("Error registering user:", error); // Adiciona o log do erro
      res.status(501).json({ error: 'Error registering user' });
    }
  }
}