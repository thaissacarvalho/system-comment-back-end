import { body } from 'express-validator';

export const checkUpdateUser = [
  body('name')
    .optional()
    .isLength({ min: 3 }).withMessage('Name must be 3 or more caracters'),

  body('username')
    .optional()
    .isLength({ min: 4 }).withMessage('Username must be 4 or more caracters.')
    .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username must be only letters, numbers e underscores'),

  body().custom((value, { req }) => {
    if (!req.body.name && !req.body.username) {
      throw new Error('At least one of the fields (name or username) must be provided for modification.');
    }
    return true;
  })
];