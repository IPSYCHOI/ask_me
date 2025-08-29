import mongoose from "mongoose";

const Schema = mongoose.Schema

const answerSchema=new Schema({
    body:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Answer = mongoose.model("Answer",answerSchema)
export default Answer