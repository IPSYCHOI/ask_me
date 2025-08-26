import mongoose from "mongoose";

const Schema = mongoose.Schema

const answerSchema=new Schema({
    body:{
        type:String,
        required:true
    }
})

const Answer = mongoose.model("Answer",answerSchema)
export default Answer