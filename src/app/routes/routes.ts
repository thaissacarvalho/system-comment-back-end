import { Router } from 'express';
import { checkUsername } from '../validations/checkUsername.validations';
import { UserController } from '../controllers/user.controller';
import { PostController } from '../controllers/post.controller';
import { CommentController } from '../controllers/comment.controller';
import { LikeController } from '../controllers/like.controller';

export const router = Router();
const userController = new UserController();
const postController = new PostController();
const commentController = new CommentController();
const likeController = new LikeController();

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
router.get('/comments', commentController.findComments.bind(commentController));
router.get('/comments/:id', commentController.findCommentById.bind(commentController));
router.post(
  '/comments/register',
  commentController.registerComment.bind(commentController)
);
router.delete(
  '/comments/delete/:id',
  commentController.deleteComment.bind(commentController)
);

// LIKE
router.get('/likes', likeController.findManyLike.bind(likeController));
router.get('/likes/:id', likeController.findLikeById.bind(likeController));
router.post('/likes/register', likeController.registerLike.bind(likeController));
router.delete('/likes/delete/:id', likeController.deleteLike.bind(likeController));

