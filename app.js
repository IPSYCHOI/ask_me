import express from "express"
import { apiRouter } from "./routes/index.js"
import { notFound } from "./middlewares/notFound.js"
const app = express()

app.use(express.json())

app.use("/api",apiRouter)

app.use(notFound)
export default app