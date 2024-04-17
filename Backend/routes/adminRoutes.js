import {Router} from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getAllUsersController, getAllDoctorController, changeAccountStatusController} from  '../controllers/adminCtrl.js'

const router = express.Router();

//GET || USERS
router.get('/getAllUsers', authMiddleware, getAllUsersController)

//GET || Doctors
router.get('/getAllDoctors', authMiddleware, getAllDoctorController)

//POST || Account Status
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)

module.exports = router;