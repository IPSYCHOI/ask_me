import express from "express"
import questionController from "../controllers/questionController.js"
import { asyncErr } from "../middlewares/asyncErrorHandler.js"
import { validate } from "../middlewares/validate.js"
import { questionSchema } from "../validation/create_question.js"
import { isId } from "../middlewares/isId.js"



const router = express.Router()

router.post("/",validate(questionSchema),asyncErr(questionController.addQuestion))
router.get("/",asyncErr(questionController.getAll))
router.get("/:id",isId,asyncErr(questionController.getOne))

export { router as questionRouter}

