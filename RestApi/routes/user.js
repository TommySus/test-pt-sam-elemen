const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')


router.post("/",  UserController.register)
router.put("/:id",  UserController.updateUser)
router.delete("/:id",  UserController.deleteUser)
router.get("/",  UserController.getAllUser)


module.exports = router