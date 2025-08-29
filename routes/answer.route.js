import express from "express"
import answerController from "../controllers/answerController.js"
import { asyncErr } from "../middlewares/asyncErrorHandler.js"
import { validate } from "../middlewares/validate.js"
import { answerSchema } from "../validation/create_answer.js"
import { isId } from "../middlewares/isId.js"
import { isAuth } from "../middlewares/isAuth.js"


const router = express.Router()

router.post("/:id",isAuth,isId,validate(answerSchema),asyncErr(answerController.addAnswer))

export { router as answerRouter}