import joi from "joi"

export const answerSchema=joi.object({
    body: joi.string().min(5).max(1000).required()
})
