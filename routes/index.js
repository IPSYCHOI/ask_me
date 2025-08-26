import express from "express"
import { questionRouter } from "./question.routes.js"
import { answerRouter } from "./answer.route.js"

const router = express.Router()

router.use("/question",questionRouter)
router.use("/answer",answerRouter)


export { router as apiRouter}