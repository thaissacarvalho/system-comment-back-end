import { Router } from 'express';
import { CreateUserDto } from '../dtos/create-user';
import { UserController } from '../controllers/user.controller';
import { validateDto } from '../middleware/validateDto';

export const router = Router();
const userController = new UserController();

router.get('/syscomment', (req, res) => {
  res.send("What's up, bro?");
});

router.post('/syscomment/user', validateDto(CreateUserDto), userController.createUser);