import request from "supertest";
import { app } from "../app";

import createConnection from '../database';


describe("Surveys", ()=>{
    beforeAll(async() =>{ 
        const connection = await createConnection();
        await connection.runMigrations();
     });
   
 it("Criar uma nova pesquisa!", async() =>{
        const response = await request(app).post("/surveys", ).send({
            title: "Gostaríamos de saber a tua opinião sobre nosso atendimento!",
            description: "De 0 a 10 qual seu grau de satisfação?"
            }); 

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    });

    it("Criar segunda pesquisa!", async() =>{
        await request(app).post("/surveys", ).send({
            title: "Pesquisa 2",
            description: "De 0 a 5 qual seu grau de satisfação?"
            }); 

    const response = await request(app).get("/surveys");
    expect(response.body.length).toBe(2);

    });


});