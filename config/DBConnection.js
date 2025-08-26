import mongoose from "mongoose";

function dbConnect(){
    return new Promise((res,rej)=>{
        mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            res("DB connected successfully")
        })
        .catch(err=>{
            console.log(err)
            rej(err)
        })
    })
}

export default dbConnect