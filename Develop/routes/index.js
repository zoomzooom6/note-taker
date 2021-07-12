const router = require('express').Router();
const apiRoute = require('./apiRoutes');
const hmtlRoute = require('./htmlRoutes');

router.use(apiRoute);
router.use(htmlRoute);

module.exports = router;