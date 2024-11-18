import { body } from 'express-validator';

export const checkLike = [
  body('userId')
    .isInt().withMessage('O userId deve ser um número inteiro.')
    .notEmpty().withMessage('O userId é obrigatório.'),
  
  body('commentId')
    .isInt().withMessage('O commentId deve ser um número inteiro.')
    .notEmpty().withMessage('O commentId é obrigatório.'),
  
  body('postId')
    .optional()
    .isInt().withMessage('O postId deve ser um número inteiro se fornecido.')
];
