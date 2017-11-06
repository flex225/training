const express = require('express')
const router = express.Router()

router.use('/home', router)

router.get('/', function (req, res) {
    res.send('home')
})

module.exports = router