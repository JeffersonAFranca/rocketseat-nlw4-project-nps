
import { Router }              from 'express';
import { SurveyController }   from './controllers/SurveysController';
import { UserController }     from "./controllers/UserController";
import { SendMailController } from "./controllers/SendMailController"; 

const router = Router()

//Instânciando class para poder ser utilizada dentro do documento
const userController     = new UserController();
const surveyController   = new SurveyController()
const sendMailController = new SendMailController()

router.post("/users"   , userController.create     );
router.post("/surveys" , surveyController.create   );
router.get("/surveys"  , surveyController.show     );
router.post("/sendmail", sendMailController.execute);

export { router }