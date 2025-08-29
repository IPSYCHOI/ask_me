import jwt from "jsonwebtoken"
import User from "../models/user.schema.js"

export const isAuth = async (req, res, next) => {
  try {
    let authHeader = req.headers["authorization"]

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded?.id) {
      return res.status(401).json({ message: "Invalid token" })
    }

    const user = await User.findById(decoded.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    req.userId = user._id
    next()

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", error: error.message })
  }
}
