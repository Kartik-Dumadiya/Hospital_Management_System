import {Router} from 'express';
import { registerController, loginController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController} from '../controllers/userCtrl.js'
import authMiddleware from '../middlewares/authMiddleware.js';

//router object
const router = Router();

//routes
//Login || Post
router.post('/login',loginController)

//Register || Post
router.post('/register',registerController);

// router.get('/register', ty);

// Auth || Post
router.post('/getUserData', authMiddleware, authController)

// Apply Doctor || Post
router.post('/apply-doctor', authMiddleware, applyDoctorController) 

// Notification Doctor || Post
router.post('/get-all-notification', authMiddleware, getAllNotificationController) 

// Delete Notification Doctor || Post
router.post('/get-all-notification', authMiddleware, deleteAllNotificationController) 

export default router;