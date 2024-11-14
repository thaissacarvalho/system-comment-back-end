import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { validationResult } from 'express-validator';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async registerUser(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg); // Extraímos apenas o campo "msg"
      return res.status(400).json({ errors: errorMessages });
    }

    const { name, username } = req.body;

    try {
      const newUser = await this.userService.createUser({ name, username });
      return res.status(200).json(newUser);
    } catch (error) {
      console.error('Error registering user:', error); // Adiciona o log do erro
      return res.status(501).json({ error: 'Error registering user' });
    }
  }

  public async findUsers(req: Request, res: Response): Promise<Response> {
    try {
      const returnUsers = await this.userService.findManyUser();
      return res.status(200).json(returnUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async findUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'ID is required.' });
    }

    try {
      const userId = await this.userService.findUserById(id);

      if (!userId) {
        return res.status(404).json({ message: 'User not found.' });
      }

      return res.status(200).json(userId);
    } catch (error) {
      console.error('Error occurred while finding userId:', error); // Log do erro
      return res.status(500).json({ message: `Error on servidor` });
    }
  }

  public async findUserByUsername(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    // Check if username is provided
    if (!username) {
      return res.status(400).json({ message: 'Username is required.' });
    }

    try {
      const findUsername = await this.userService.findUserByUsername(username);

      // Check if user exists
      if (!findUsername) {
        return res.status(404).json({ message: 'User not found.' });
      }

      return res.status(200).json(findUsername);  // Send successful response

    } catch (error) {
      console.error('Error occurred while finding username:', error); // Log the error
      return res.status(500).json({ message: 'Error on servidor' });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg); // Extraímos apenas o campo "msg"
      return res.status(400).json({ errors: errorMessages });
    }

    const { id } = req.params;
    const { name, username } = req.body;

    if (!id) {
      return res.status(404).json({ message: 'ID is required.' });
    }

    try {
      const updatedUser = await this.userService.updateUser(Number(id), {
        name: name,
        username: username,
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        // Verificando se é uma instância de Error
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: 'Erro desconhecido' });
      }
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: 'ID is required.' });
    }

    try {
      const deletedUser = await this.userService.deleteUser(id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleted user.' });
    }
  }
}
