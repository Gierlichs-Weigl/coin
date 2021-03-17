import { Router } from 'express';
import { UserInterface } from '@/interfaces/index';
import User from '../../models/user'; //TODO: FIX MY ABSOLUTE PATH

const userRoutes = Router();

userRoutes.get('/', async (_, res) => {
  try {
    const user: UserInterface[] = await User.find({});

    console.log('USER', user);
  } catch (error) {
    console.log('error');
    res.status(500).send(error);
  }
});

export default userRoutes;
