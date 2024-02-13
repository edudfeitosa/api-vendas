import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/app-error';

const app = express();
const port = 3000;

// configuração do express
app.use(cors());
app.use(express.json());
app.use(routes);

// tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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

// inicialização do servidor
app.listen(port, () => {
  console.log(`Server iniciado na porta ${port}`);
});
