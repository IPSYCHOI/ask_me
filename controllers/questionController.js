import Question from "../models/question.schema.js";

async function addQuestion (req,res){
    const body = req.body.body 
    const question = new Question({
        body
    })
    await question.save()
    res.status(201).json({
        message:"New question added successfully",
        data:question
    })
}

const getAll = async(req,res)=>{
    const questions= await Question.find()
    res.status(200).json({
        message : "All questions fetched successfully ",
        data:questions
    })
}
const getOne = async(req,res)=>{
    const id = req.params.id
    const question= await Question.findById(id)
    res.status(200).json({
        message : "question fetched successfully ",
        data:question
    })
}



const questionController={
    addQuestion,
    getAll,
    getOne
}
export default questionController
