import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  return res.json({ mensagem: "Hello World!" });
});

export default routes;
