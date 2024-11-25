import { body } from 'express-validator';

export const checkCreatePost = [
  body('authorId')
    .exists().withMessage('authorId is required'),

  body('title')
    .optional(),

  body('text')
    .notEmpty().withMessage('Text is required') 
];

