
//Importação do "Router" de dentro do "express" 
import { Router} from 'express';
//Importando a class UserController para dentro do documento.
import { UserController } from "./controllers/UserController";

const router = Router()

//Instânciando class para poder ser utilizada dentro do documento
const userController = new UserController();

router.post("/users", userController.create);

export { router }