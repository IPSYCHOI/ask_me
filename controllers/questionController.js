import Question from "../models/question.schema.js";

async function addQuestion (req,res){
    const body = req.body.body 
    const category = req.body.category
    const question = new Question({
        body,
        category
    })
    await question.save()
    res.status(201).json({
        message:"New question added successfully",
        data:question
    })
}

const getAll = async(req,res)=>{
    const page = req.query.page || 1
    const limit = req.query.limit || 10
    const skip = (page-1)*limit
    const filter= req.query.filter
    const query= filter?{category:filter}:{}
    const questions= await Question.find(query)
    .skip(skip)
    .limit(limit)

    const total = await Question.countDocuments(query)
    res.status(200).json({
        message : "All questions fetched successfully ",
        page,
        limit,
        data:questions,
        total
    })
}
const getOne = async(req,res)=>{
    const id = req.params.id
    const question= await Question.findById(id).populate("answers")
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
