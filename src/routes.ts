
//Importação do "Router" de dentro do "express" 
import { Router} from 'express';
import { SurveyController } from './controllers/SurveysController';
//Importando a class UserController para dentro do documento.
import { UserController } from "./controllers/UserController";

const router = Router()

//Instânciando class para poder ser utilizada dentro do documento
const userController = new UserController();
const surveyController = new SurveyController()

router.post("/users"  , userController.create  );
router.post("/surveys", surveyController.create);
router.get("/surveys" , surveyController.show  );

export { router }