import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { PostController } from '../controllers/post.controller';
import { CommentController } from '../controllers/comment.controller';
import { LikeController } from '../controllers/like.controller';
import { checkUpdateUser } from '../validations/checkUpdateUser.validation';
import { checkCreateUser } from '../validations/checkCreateUser.validations';
import { checkCreatePost } from '../validations/checkCreatePost.validation';
import { checkCreateComment } from '../validations/checkCreateComment.validation';
import { checkLike } from '../validations/checkLike.validation';

export const router = Router();
const userController = new UserController();
const postController = new PostController();
const commentController = new CommentController();
const likeController = new LikeController();

router.get('/', (req, res) => {
  res.send("API done! Try others path.");
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
  checkCreateUser,
  userController.registerUser.bind(userController)
);
router.patch(
  '/users/editUser/:id',
  checkUpdateUser,
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
  '/posts/register', checkCreatePost,
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
  '/comments/register', checkCreateComment,
  commentController.registerComment.bind(commentController)
);
router.delete(
  '/comments/delete/:id',
  commentController.deleteComment.bind(commentController)
);

// LIKE
router.get('/likes', likeController.findManyLike.bind(likeController));
router.get('/likes/:id', likeController.findLikeById.bind(likeController));
router.post('/likes/register', checkLike, likeController.registerLike.bind(likeController));
router.delete('/likes/delete/:id', likeController.deleteLike.bind(likeController));

