import 'reflect-metadata';
import express from 'express';
const app = express();


//Importando arquivo de conexão com o database
//Devido o arquivo de configuração estar nomeado como "index" , não é necessário informar o nome do arquivo. 
import "./database";



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
app.get("/", (request, response) =>{
    return response.json({message: "Hello Word!!"})
})

app.post("/", (request, response) =>{
    //Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
})


 // Iniciando Servidor
app.listen(3333, () => console.log('Server is running') );