const { User } = require('../models')

class UserController {
    static register(req,res,next) {
        const obj = {
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            city: req.body.city,
            province: req.body.province,
            updatedAt: new Date(),
            createdAt: new Date
        }
        User.create(obj)
        .then(data => {
            res.status(201).json({
                id:data.id,
                username: data.username, 
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                address: data.address,
                city: data.city,
                province: data.province,
            })
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = UserController