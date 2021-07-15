const router = require('express').Router();
const apiRoute = require('../routes/apiRoutes');
const htmlRoute = require('../routes/htmlRoutes');

router.use(apiRoute);
router.use(htmlRoute);

module.exports = router;