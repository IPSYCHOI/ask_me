export function err(err,req,res,next){
    const code = err.status || 500
    res.status(code).json({
        message:err.message
    })
}