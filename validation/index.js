const { validationResult, check } = require("express-validator");

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let errorList =errors.array().map((error)=>{
            return error.msg
        })
        return res.status(202).json({
            errors: errorList
        })
    }
    next()
}



