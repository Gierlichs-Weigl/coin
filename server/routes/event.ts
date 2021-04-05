
import {Router} from 'express';

const eventRoutes = Router();

eventRoutes.get('/', async (_, res) => {
    res.send({message: 'HELLOW ORLD2'}).json()
});

export default eventRoutes