export  const validate = (schema)=>{
    return (req,res,next)=>{
        const {error , value} =schema.validate(req.body)
        if(error){
            const result = {
                message:error.details.map(d =>d.message)[0],
                fields : error.details.map(d =>d.path)[0][0]

            }
            return res.status(400).json(result)
        }
        next()
    }
}