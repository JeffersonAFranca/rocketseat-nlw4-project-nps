import request from "supertest";
import { app } from "../app";

import createConnection from '../database';


describe("Users", ()=>{
    beforeAll(async() =>{ 
        const connection = await createConnection();
        await connection.runMigrations();
     });
   
 it("Criar cadastro de um novo usuário", async() =>{
    const response = await request(app).post("/users", ).send({
        email: "user@gmail.com",
        name: "UserTest"
        }); 

    expect(response.status).toBe(201);
    });
});


