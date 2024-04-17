import {Router} from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {getDoctorInfoController, updateProfileController, getDoctorByIdController,
    doctorAppointmentsController,
    updateStatusController,} from  '../controllers/doctorCtrl.js'

const doctorRouter = Router();

//POST || Single Doc Info
doctorRouter.post('/getDoctorInfo',authMiddleware,getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

export default doctorRouter;