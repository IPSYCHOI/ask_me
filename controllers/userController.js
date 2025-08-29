import User from "../models/user.schema.js"
import bcrypt from "bcrypt"


const signup =  async(req,res)=>{
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(400).json({
            message: "This email already exists"
        });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({
        name,
        email,
        password: hashedPass
    });
    await user.save();
    const parserUser = user.toObject();
    delete parserUser.password;
    res.status(201).json({
        message: "User registered successfully",
        data: {
            id: parserUser._id,
            name: parserUser.name,
            email: parserUser.email
        }
    });
}
const login = async(req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }
    const { generateToken } = await import("../utils/jwt.js");
    const token = generateToken({ id: user._id }, "1h");
    res.status(200).json({
        message: "Logged in successfully",
        data: {
            id: user._id,
            name: user.name,
            email: user.email
        },
        token
    });

}
const userController={
    signup,
    login
}
export default userController