import {Router} from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {getDoctorInfoController, updateProfileController} from  '../controllers/doctorCtrl.js'

const doctorRouter = Router();

//POST || Single Doc Info
doctorRouter.post('/getDoctorInfo',authMiddleware,getDoctorInfoController);

//POST || Single Doc Info
doctorRouter.post('/updateProfile',authMiddleware,updateProfileController);

export default doctorRouter;