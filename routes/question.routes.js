import express from "express"
import questionController from "../controllers/questionController.js"
import { asyncErr } from "../middlewares/asyncErrorHandler.js"


const router = express.Router()

router.post("/",asyncErr(questionController.addQuestion))

export { router as questionRouter}