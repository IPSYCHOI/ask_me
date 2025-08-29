
import jwt from "jsonwebtoken"

export function generateToken(payload, expiresIn = "1h") {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

export function verifyToken(token) {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (err) {
		return null;
	}
}