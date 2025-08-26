export function notFound(req,res){
    res.status(404).json({
        message:`This route ${req.url} not found `
    })
}