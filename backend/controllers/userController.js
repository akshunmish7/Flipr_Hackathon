const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken')

const registerUser = asyncHandler(async (req,res)=>{
    const {name, email, phNumber, password, pic} = req.body;
    if(!name || !email || !password || !phNumber){
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }
    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already Exists");
    }
    const user = await User.create({
        name,
        email,
        phNumber,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phNumber: user.phNumber,
            pic: user.pic,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(400);
        throw new Error("failed to create the User");
    }
});

const authUser = asyncHandler(async(req, res)=>{
    const {email, password} =req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phNumber: user.phNumber,
            pic: user.pic,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(401);
        throw new Error("Invalid username or password");
    }
});

module.exports = {registerUser,authUser};