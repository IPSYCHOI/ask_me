import express from "express"
import { questionRouter } from "./question.routes.js"
import { answerRouter } from "./answer.route.js"
import { userRouter } from "./user.route.js"

const router = express.Router()

router.use("/question",questionRouter)
router.use("/answer",answerRouter)
router.use("/",userRouter)


export { router as apiRouter}