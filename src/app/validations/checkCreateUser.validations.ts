import { UserRepository } from '../repository/user.repository';
import { body } from 'express-validator';

const userRepository = new UserRepository();

export const checkCreateUser = [
  body('name')
    .exists().withMessage('Name is required')
    .isLength({ min: 3 }).withMessage('Name must be 3 or more caracters.'),

  body('username')
    .notEmpty()
    .withMessage('Username is required.')
    .bail()
    .isLength({ min: 4 })
    .withMessage('Username should be 4 or more caracteres.')
    .bail()
    .custom(async (value) => {
      // Verifica se o username já existe no banco de dados
      const existingUser = await userRepository.findUserByUsername(value);

      if (existingUser) {
        throw new Error('Username already exist.');
      }

      return true;
    }),
];

