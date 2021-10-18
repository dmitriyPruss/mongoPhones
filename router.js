const { Router } = require('express');
const phoneRouter = require('./routes/phoneRouter');
const cpuRouter = require('./routes/cpuRouter');

const router = Router();

router.use('/phones', phoneRouter);
router.use('/cpus', cpuRouter);

module.exports = router;
