import userModel from '../models/userModels.js'
import doctorModel from '../models/doctorModels.js';

const getDoctorInfoController = async(req,res) => {
    try {
        const doctor = await doctorModel.findOne({ userId : req.body.userId });

        res.status(200).send({
            success : true,
            message : "doctor data fetch success",
            data : doctor,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message : 'error in account status',
            error
        })
    }
}

const updateProfileController = async() => {}

module.exports = { getDoctorInfoController , updateProfileController }