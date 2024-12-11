import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { router } from '../app/routes/routes';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from '../app/docs/swagger-config';

dotenv.config();

const app = express();
const port = process.env.PORT;

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(express.json());

// Configuração do CORS para permitir acessos de um domínio específico
app.use(
  cors({
    origin: process.env.DOMAIN, // Permitir apenas este domínio
    methods: process.env.METHOD, // Permitir esses métodos
  })
);

// Usar o Helmet para proteger a aplicação com cabeçalhos de segurança
app.use(helmet());

app.use('/syscomment/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/syscomment', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}.`);
  console.log(`Swagger docs available at http://localhost:${port}/syscomment/api-docs`);
});
