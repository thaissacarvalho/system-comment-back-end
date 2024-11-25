import { body } from "express-validator";

export const checkCreateComment = [
  body('text')
    .notEmpty().withMessage('Text is required.'),
  
  body('postId')
    .notEmpty().withMessage('Post ID is required.'),
      
  body('parentId')
    .optional()
    .isBoolean({ loose: true }).withMessage('Parent ID must be true or false.'),
]