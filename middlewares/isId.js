import mongoose from "mongoose";

export const isId=(req,res,next)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({
            message:"That is not a valid Mongo Id"
        })
    }
    next()
}