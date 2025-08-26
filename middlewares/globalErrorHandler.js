export function err(err,req,res,next){
    res.status(err.status).json({
        message:err.message
    })
}