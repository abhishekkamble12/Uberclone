import captainModel from "../models/captain.model.js";
import blackListModel from "../models/blacklistToken.model.js";
import { validationResult } from "express-validator";
import * as captainservice from "../Services/captain.services.js";

export const registerCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: "error is invalie" });
  }
  const {fullname, email, password, phone, vehicle } = req.body;
  const iscaptainAlreadyexist = await captainModel.findOne({email});
  if (iscaptainAlreadyexist){
    return res.status(400).json({message : 'captain already exist'})

  }
  const hashedPassword = await captainModel.hashPassword(password);
//   using the services to register the captain
const captain = await captainservice.createCaptain({
    firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType 
})
const token = captain.generateAuthToken();
res.cookie('token', token);
res.status(201).json({ token, captain });
};

export const loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: "Invalid input" });
  }
  
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select('+password');
  
  if (!captain) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  
  const isMatch = await captain.comparePassword(password);
  
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  
  const token = captain.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({ token, captain });
};

export const getCaptainProfile = async(req,res,next) =>{
    res.status(200).json({captain : req.captain})

}
export const logoutCaptain = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blackListModel.create({token});

    res.clearCookie('token');
    res.status(200).json({message : 'logout successfully'})
}