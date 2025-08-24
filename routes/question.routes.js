import express from "express"
import questionController from "../controllers/questionController.js"

const router = express.Router()

router.post("/",questionController.addQuestion)

export { router as questionRouter}