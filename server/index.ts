
import express, { Request, Response } from 'express';
import next from 'next';
import { createServer } from 'http';
import mongoose from 'mongoose';
import {config} from 'dotenv'

import userRoutes from './routes/user';
import eventRoutes from './routes/event'

config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const server = express();
const http = createServer(server);
const DB_CONNECTION: string = process.env.DB_CONNECTION as string


const startServer = async () => {
    await app.prepare();

    server.use(express.json());

    server.use('/api/user', userRoutes);
    server.use('/api/event', eventRoutes);

    server.all('*', (req: Request, res: Response) => {
        return handle(req, res);
    });

    mongoose.connect(
        DB_CONNECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME,
            useFindAndModify: false,
        },
        () => {
            console.log('connected to db!');

            http.listen(port, (err?: Error) => {
                if (err) throw new Error(err.message);
                console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV || 'dev'}`);
            });
        }
    );

};

startServer();
