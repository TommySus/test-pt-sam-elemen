const { User } = require('../models')

class UserController {
    static register(req,res,next) {
        let last_name = req.body.last_name
        let address = req.body.address
        let city = req.body.city
        let province = req.body.province
        if (!last_name || !last_name.trim()) {
            last_name = null
        }
        if (!address || !address.trim()) {
            address = null
        }
        if (!city || !city.trim()) {
            city = null
        }
        if (!province || !province.trim()) {
            province = null
        }
        const obj = {
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: last_name,
            address: address,
            city: city,
            province: province,
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


    static updateUser(req,res,next) {
        let last_name = req.body.last_name
        let address = req.body.address
        let city = req.body.city
        let province = req.body.province
        if (!last_name || !last_name.trim()) {
            last_name = null
        }
        if (!address || !address.trim()) {
            address = null
        }
        if (!city || !city.trim()) {
            city = null
        }
        if (!province || !province.trim()) {
            province = null
        }
        const obj = {
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: last_name,
            address: address,
            city: city,
            province: province
        }
        User.update(obj,{where: {id: req.params.id}})
        .then(data => {
            if (data) {
                return User.findOne({where: {id: req.params.id}})
                .then(data2 => {
                   res.status(200).json({
                        id:data2.id,
                        username: data2.username, 
                        email: data2.email,
                        first_name: data2.first_name,
                        last_name: data2.last_name,
                        address: data2.address,
                        city: data2.city,
                        province: data2.province,
                   })
                })
                .catch(error => {
                    throw {
                        status: 404,
                        message: 'User not found'
                    }
                }) 
            } else {
                throw {
                    status: 404,
                    message: 'User not found'
                }
            }
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = UserController