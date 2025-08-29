import User from "../models/user.schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const signup =  async(req,res)=>{
    const {name , email, password}= req.body
    const existUser = await User.findOne({email})
    if(existUser){
        return res.status(400).json({
            message:"this email already exist"
        })
    }

    const hashedPass= await bcrypt.hash(password,10)
    const user = new User({
        name,
        email,
        password:hashedPass
    })
    await user.save()
    const parserUser=user.toObject()
        res.status(201).json({
        message:"u r logged in",
        date:{
            id:parserUser._id,
            name:parserUser.name,
            email:parserUser.email
        }
    })
}
const login = async(req,res)=>{
    const SECRET="process.env.JWT_SECRET"

    const {email, password}= req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"invalid data"
        })
    }
    
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({
            message:"invalid data"
        })
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
    res.status(200).json({
        message:"logged in",
        data:{
            id:user._id,
            name:user.name,
            email:user.email
        },
        token
    })

}
const userController={
    signup,
    login
}
export default userController