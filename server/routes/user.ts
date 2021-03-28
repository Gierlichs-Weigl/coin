import {Router} from 'express';
// import { ExistingUser } from '../../interfaces';
// import User from '../models/User';
// import { hash, compare } from 'bcrypt';
// import { sign } from 'jsonwebtoken';
// import cookie from 'cookie';

const userRoutes = Router();


//
// -- get --
//


userRoutes.get('/', async (_, res) => {
        res.send({message: 'HELLOW ORLD'}).json()
});




export default userRoutes
