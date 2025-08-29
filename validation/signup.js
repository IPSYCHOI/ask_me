import joi from "joi";
const signupSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(6).max(50).required() // use patterns
})
export default signupSchema