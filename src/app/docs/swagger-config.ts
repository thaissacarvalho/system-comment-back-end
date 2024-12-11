import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

export const swaggerOptions = {
  swaggerDefinition: {
    myapi: '1.0.0',
    info: {
      title: 'System Comment',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: `http://localhost:${port}/api/docs`,
      },
    ],
  },
  apis: ['./routes/*.ts'], 
};