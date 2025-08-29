import express from "express"
import userController from "../controllers/userController.js"
import { asyncErr } from "../middlewares/asyncErrorHandler.js"
import { validate } from "../middlewares/validate.js"
import signupSchema from "../validation/signup.js"
import loginSchema from "../validation/login.js"



const router = express.Router()

router.post("/signup",validate(signupSchema),asyncErr(userController.signup))
router.post("/login",validate(loginSchema),asyncErr(userController.login))

export { router as userRouter}