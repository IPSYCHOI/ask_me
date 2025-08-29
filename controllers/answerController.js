import Answer from "../models/answer.schema.js"
import Question from "../models/question.schema.js"

const addAnswer = async(req,res)=>{
    const body = req.body.body
    const id =req.params.id
    const userId = req.userId
    const answer= new Answer({
        body,
        user:userId
    })
    await answer.save()
    const question = await Question.findById(id)
    // if question exist
    question.answers.push(answer._id)
    await question.save()
    res.status(201).json({
        message :"new answer added",
        data:answer
    })
    
}
const answerController={
    addAnswer
}
export default answerController