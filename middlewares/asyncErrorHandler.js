export function asyncErr(fn){
    return (req,res,next)=>{
        fn(req,res).catch(next)
    }
}
/**
 * fn => our controller
 * 
 * 
 */