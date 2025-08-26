import joi from "joi"

export const questionSchema=joi.object({
    body: joi.string().min(5).max(1000).required()
})
