import userModel from '../models/userModels.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//register callback
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne( {username:req.body.username} );
        if(existingUser){
            return res.status(200).send({message:'User already exist', success: false});
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({message : 'Register Sucessfully', success : true});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message : `Register Controller ${error.message}`})
    }
}

//login callback
const loginController = async(req, res) => {
    try {
        const user = await userModel.findOne({username : req.body.username})
        if(!user){
            return res.status(200).send({message : 'User not found', success: false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch){
            return res.status(200).send({message : 'Invalid Username or Password', success : false})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn: '1d'})
        res.status(200).send({message:'Login Success', success:true, token})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`Error in Logic CTRL ${error.message}`})
    }
}

const authController = async(req, res) => {
    try {
        const user = await userModel.findById({_id:req.body.userId})
        user.password = undefined;
        if(!user){
            return res.status(200).send({
                message : 'User not found',
                success : false
            })
        }else{
            res.status(200).send({
                success : true,
                data: user,
            })
        }
    } catch (error) {
       console.log(error);
       res.status(500).send({
        message : 'Auth Error',
        success : false,
        error
       }) 
    }
}
// const ty = async(req,res) => {
//     console.log("heloo");
//     res.status(200).send("hi kartik");
// }

export {loginController, registerController, authController};