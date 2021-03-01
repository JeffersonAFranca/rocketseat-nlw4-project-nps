import 'reflect-metadata';
import express, { request, response } from 'express';
import createConnection from "./database";  //Importando arquivo de conexão com o database - Devido o arquivo de estar com nome "index" , não é necessário informar o nome do arquivo. 


import { router } from "./routes";

const app = express();

app.use(express.json()); // Faz com que o express receba aquivos json
app.use(router)


export { app }
