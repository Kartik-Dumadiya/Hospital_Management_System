import {Router} from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {getDoctorInfoController, updateProfileController} from  '../controllers/doctorCtrl.js'

const router = express.Router();

//POST || Single Doc Info
router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController);

//POST || Single Doc Info
router.post('/updateProfile',authMiddleware,updateProfileController);

module.exports = router;