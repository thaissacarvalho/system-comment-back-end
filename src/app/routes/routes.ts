import { Router } from 'express';
import { checkUsername } from '../validations/checkUsername.validations';
import { UserController } from '../controllers/user.controller';
import { PostController } from '../controllers/post.controller';

export const router = Router();
const userController = new UserController();
const postController = new PostController();

router.get('/', (req, res) => {
  res.send("What's up, bro?");
});

// USERS
router.get('/users', userController.findUsers.bind(userController));
router.get('/users/:id', userController.findUserById.bind(userController));
router.get(
  '/users/user/:username',
  userController.findUserByUsername.bind(userController)
);
router.post(
  '/users/register',
  checkUsername,
  userController.registerUser.bind(userController)
);
router.patch(
  '/users/editUser/:id',
  checkUsername,
  userController.updateUser.bind(userController)
);
router.delete(
  '/users/delete/:id',
  userController.deleteUser.bind(userController)
);

// POST
router.get('/posts', postController.findPosts.bind(postController));
router.get('/posts/:id', postController.findPostById.bind(postController));
router.post(
  '/posts/register',
  postController.registerPost.bind(postController)
);
router.delete(
  '/posts/delete/:id',
  postController.deletePost.bind(postController)
);

// COMMENT

// LIKE

// DESLIKE
