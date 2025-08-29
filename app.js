import express from "express"
import { apiRouter } from "./routes/index.js"
import { notFound } from "./middlewares/notFound.js"
import { err } from "./middlewares/globalErrorHandler.js"

const app = express()

app.use(express.json())

app.use("/api",apiRouter)

app.use(notFound)

app.use(err)
export default app