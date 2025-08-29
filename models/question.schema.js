import mongoose from "mongoose";

const Schema = mongoose.Schema

const questionSchema=new Schema({
    body:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["arabic","english","math"],
        required:true
    },
    answers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Answer"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Question = mongoose.model("questions",questionSchema)
export default Question
