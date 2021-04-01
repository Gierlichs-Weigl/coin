import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/:user_id', async (_, res) => {
  res.send({ message: 'HELLOWorld' }).json();
});

export default userRoutes;
