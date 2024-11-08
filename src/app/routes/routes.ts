import { Router } from 'express';
import { checkUsername } from '../validations/checkUsername.validations';
import { UserController } from '../controllers/User.controller';

export const router = Router();
const userController = new UserController();

router.get('/syscomment', (req, res) => {
  res.send("What's up, bro?");
});

router.post('/register', checkUsername, userController.register);
