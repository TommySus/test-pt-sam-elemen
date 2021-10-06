module.exports = (err, req, res, next) => {
    if(err.status){
        const message = {
            message: err.message
        }
        res.status(err.status).json(message)
    } else if (err.name == "SequelizeValidationError" || err.name == "SequelizeUniqueConstraintError") {
        const dataError = []
        for (let i = 0 ; i < err.errors.length; i++){
            dataError.push(err.errors[i].message)
        }
        res.status(400).json({message: dataError})
    } else {
        res.status(500).json({message: 'internal server error'})
    }
}
