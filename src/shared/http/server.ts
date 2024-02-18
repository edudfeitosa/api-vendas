import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/app-error';
import 'dotenv/config';

const server = express();

// configuração do express
server.use(cors());
server.use(express.json());
server.use(routes);

// tratamento de erros
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(400).json({
      status: 'error',
      error: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    error: 'Internal server error'
  });
});

export default server;
