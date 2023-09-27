const attainable = require('./attainable-routes')
const lofty = require('./lofty-routes')
const task = require('./task-routes')
const user = require('./user-routes')
const router = require('express').Router()

//user is turned on rn, uncomment 4 and 12 to turn user off

router.use('/attainable', attainable)
router.use('/task', task)
router.use('/lofty', lofty)
router.use('/user', user)

module.exports = router