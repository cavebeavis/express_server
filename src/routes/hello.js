var express = require('express');
var router = express.Router();
var read = require('../models/readfile');

/* GET hello. */
router.get('/', async function (req, res, next) {
  const me = req.query.me
  console.log(req.query)

  const info = await read();

  res.send(`hello ${me}\n\nfoo:\n\n${info.toString('utf-8')}`)
});

module.exports = router;