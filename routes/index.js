import express from "express"
import { questionRouter } from "./question.routes.js"

const router = express.Router()

router.use("/question",questionRouter)


export { router as apiRouter}