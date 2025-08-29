import joi from "joi";
const loginSchema = joi.object({
    email:joi.string().email().lowercase().required(),
    password:joi.string().min(6).max(50).required() // use patterns
})
export default loginSchema