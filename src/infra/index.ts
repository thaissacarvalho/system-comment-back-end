import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { router } from '../app/routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Configuração do CORS para permitir acessos de um domínio específico
app.use(cors({
  origin: process.env.DOMAIN,   // Permitir apenas este domínio
  methods: process.env.METHOD,          // Permitir esses métodos
}));

// Usar o Helmet para proteger a aplicação com cabeçalhos de segurança
app.use(helmet());

app.use('/syscomment', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
