import jwt  from "jsonwebtoken"
import User from "../models/user.schema.js"
// const SECRET="process.env.JWT_SECRET"

export const isAuth= async(req,res,next)=>{
    let token = req.headers["authorization"]
    token = token.split(" ")[1]
    const result =jwt.verify(token,process.env.JWT_SECRET)
    if(!result){
        return res.status(401).json({
            message:"u r not authenticated"
        })
    }   
    const id = result.id
    const isExit = await User.findById(id)
    if(!isExit){
        return res.status(404).json({
            message :"user not found"
        })
    }
    req.userId=id
    next()
}
