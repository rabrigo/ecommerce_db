const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Please use an API like Insomnia to retrieve data!</h1>")
});

module.exports = router;