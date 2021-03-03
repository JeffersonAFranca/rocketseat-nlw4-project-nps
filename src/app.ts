import 'reflect-metadata';
import express             from 'express';
import createConnection    from './database'; 
import { router }          from "./routes";

createConnection();
const app = express();

app.use(express.json()); // Faz com que o express receba aquivos json
app.use(router)


export { app }
