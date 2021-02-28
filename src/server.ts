import 'reflect-metadata';
import express, { request, response } from 'express';
<<<<<<< HEAD
import "./database";  //Importando arquivo de conexão com o database - Devido o arquivo de estar com nome "index" , não é necessário informar o nome do arquivo. 
=======
import "./database"; //Importando arquivo de conexão com o database - Devido o arquivo de estar com nome "index" , não é necessário informar o nome do arquivo. 
>>>>>>> 40bcebd85023127110c8f92bd18c1b81179ddbb3
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router)

















// Iniciando Servidor
app.listen(3333, () => console.log('Server is running') );






/*
ROTAS: São recursos disponíveis dentro de uma API
Parâmetros de uma rota (request, response)  

METODOS: Alguns que poderão ser utilizados na API 

  -GET    => Busca
  -POST   => salvar
  -PUT    => Alterar
  -DELETE => Deletar
  -PATCH  => Alteração específicas


    GET: Função que recebe uma rota 
    
    No exemplo da rota ("/",) o rota está sendo direcionada para pasta raiz
        app.get("/", (request, response) =>{
            return response.send("Hello Word!!")
        Exemplo: http://localhost:3333/
    
    No exemplo da rota "/users" utilizando o parâmetro GET é onde está os recursos para acessados     
        app.get("/users", (request, response) =>{
            return response.send("Hello Word!!")
        Exemplo: http://localhost:3333/users
*/
