import express from 'express'
import colors from 'colors'
import morgan from 'morgan';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import doctorRouter from './routes/doctorRoutes.js';

const app = express();
config();
connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL || "*", // For local: "*", for prod: your Vercel URL
    credentials: true
}));

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/user", userRouter)
app.use("/admin", adminRouter);
app.use("/doctor", doctorRouter);

// Default route for health check
app.get("/", (req, res) => {
    res.send("Hospital Management Backend is running 🚑");
});
//POrt
const port = process.env.PORT || 3002;
//listen port
app.listen(port, ()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.cyan.yellow)
})



