import { body } from 'express-validator';
import { UserRepository } from '../repository/user.repository';

const userReposity = new UserRepository();

export const checkUsername = [
  body('username')
    .notEmpty().withMessage('Username is required.')
    .bail() // Se falhar, para a execução
    .isLength({ min: 3 }).withMessage('Username should be 3 or more caracteres.')
    .bail()
    .custom(async (value) => {
      // Verifica se o username já existe no banco de dados
      const existingUser = await userReposity.findUserByUsername(value);
      
      if (existingUser) {
        throw new Error('Username already exist.');
      }
      
      return true; // Se não houver erro, retorna true
    }),
];
