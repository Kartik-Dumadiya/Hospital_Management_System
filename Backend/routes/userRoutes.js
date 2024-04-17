import {Router} from 'express';
import { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController, getAllDoctorsController, bookeAppointmnetController, bookingAvailabilityController,userAppointmentsController } from '../controllers/userCtrl.js'
import authMiddleware from '../middlewares/authMiddleware.js';
import { getAllDoctorController } from '../controllers/adminCtrl.js';

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
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController) 

//GET all doctor
router.post('/getAllDoctors', authMiddleware, getAllDoctorsController) 

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

export default router;