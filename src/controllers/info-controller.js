const { StatusCodes } = require('http-status-codes')

//info function logic
const info = (req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message: 'API is live',
        error:{},
        data:{},
    })
}

module.exports={
    info
}