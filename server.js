import dbConnect from "./config/DBConnection.js"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()

const PORT = process.env.PORT
console.log(PORT)

dbConnect()
.then((msg)=>{
    console.log(msg)
    app.listen(PORT,()=>{
    console.log("The server is running")
    })
})
.catch(err=>{
    console.log(err)
})