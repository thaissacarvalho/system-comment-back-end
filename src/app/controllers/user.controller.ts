import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { validationResult } from 'express-validator';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async registerUser(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg); // Extraímos apenas o campo "msg"
      res.status(400).json({ errors: errorMessages });
      return;
    }

    const { name, username } = req.body;

    try {
      const newUser = await this.userService.createUser({ name, username });
      res.status(200).json(newUser);
      return;
    } catch (error) {
      console.error('Error registering user:', error); // Adiciona o log do erro
      res.status(501).json({ error: 'Error registering user' });
    }
  }

  public async findUsers(req: Request, res: Response) {
    try {
      const returnUsers = await this.userService.findManyUser();
      res.status(200).json(returnUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async findUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: 'ID is required.' });
    }

    try {
      const userId = await this.userService.findUserById(id);

      if (!userId) {
        res.status(404).json({ message: 'User not found.' });
      }

      res.status(200).json(userId);
    } catch (error) {
      console.error('Error occurred while finding userId:', error); // Log do erro
      res.status(500).json({ message: `Error on servidor` });
    }
  }

  public async findUserByUsername(req: Request, res: Response): Promise<void> {
    const { username } = req.params;

    if (!username) {
      res.status(400).json({ message: 'Username is required.' });
    }

    try {
      const userName = await this.userService.findUserByUsername(username);

      if (!userName) {
        res.status(404).json({ message: 'User not found.' });
      }

      res.status(200).json(userName);
    } catch (error) {
      console.error('Error occurred while finding username:', error); // Log do erro
      res.status(500).json({ message: `Error on servidor` });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg); // Extraímos apenas o campo "msg"
      res.status(400).json({ errors: errorMessages });
      return;
    }

    const { id } = req.params;
    const { name, username } = req.body;

    if (!id) {
      res.status(404).json({ message: 'ID is required.' });
    }

    try {
      const updatedUser = await this.userService.updateUser(Number(id), {
        name: name,
        username: username,
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        // Verificando se é uma instância de Error
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Erro desconhecido' });
      }
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!id) {
      res.status(404).json({ message: 'ID is required.' });
    }

    try {
      const deletedUser = await this.userService.deleteUser(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleted user.' });
    }
  }
}
