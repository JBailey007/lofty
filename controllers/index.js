const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const attainableRoutes = require('./attainable-routes');
const taskRoutes = require('.//task-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/attainable', attainableRoutes);
router.use('/task', taskRoutes);


module.exports = router;