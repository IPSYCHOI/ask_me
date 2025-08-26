import Question from "../models/question.schema.js";

async function addQuestion (req,res){
    const body = req.body.body 
    const question = new Question({
        body
    })
    await question.save()
    const e = new Error("snk")
    e.status=333
    throw e
    res.status(201).json({
        message:"New question added successfully",
        data:question
    })
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