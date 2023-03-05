//import eksternal
const express = require('express')
const router = express()

//import controller internal
const userController = require('../controllers/user.controller')

//route users
router.get('/', userController.get)
router.get('/:id', userController.getById)


//export
module.exports = router;