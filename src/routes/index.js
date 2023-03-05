//import eksternal
const express = require('express')
const router = express()

const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const transferRoute = require("./transfer.route");

// routing landing page
router.get('/', (req, res)=> {
    return res.send("Backend successfully running at landing page")
})

// routing user
router.use('/users', userRoute)

//routing auth recruiter
router.use('/auth', authRoute)

router.use('/transfer', transferRoute);

module.exports = router;