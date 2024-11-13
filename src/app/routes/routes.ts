import { Router } from 'express';
import { checkUsername } from '../validations/checkUsername.validations';
import { UserController } from '../controllers/user.controller';

export const router = Router();
const userController = new UserController();

router.get('/', (req, res) => {
  res.send("What's up, bro?");
});

router.get('/users', userController.findUsers.bind(userController));
router.get('/users/:id', userController.findUserById.bind(userController));
router.get('/users/user/:username', userController.findUserByUsername.bind(userController));
router.post('/users/register', checkUsername, userController.register.bind(userController));
router.patch('/users/editUser/:id', checkUsername, userController.updateUser.bind(userController));
router.delete('/users/delete/:id', userController.deleteUser.bind(userController));
