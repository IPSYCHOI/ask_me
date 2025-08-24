import Question from "../models/question.schema.js";

async function addQuestion (req,res,next){
    const body = req.body.body 
    try {
        const question = new Question({
            body
        })
        await question.save()
        res.status(201).json({
            message:"New question added successfully",
            data:question
        })
    } catch (error) {
        next (error)
    }
}

const questionController={
    addQuestion
}
export default questionController


/*

{
    addQuestion
    getAll
    getOne
}
* */