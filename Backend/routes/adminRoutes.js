import {Router} from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getAllUsersController, getAllDoctorController} from 
'../controllers/adminCtrl.js'

const router = express.Router();

//GET || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersController)

//GET || Doctors
router.get('/getAllDoctors', authMiddleware, getAllDoctorController)

module.exports = router;