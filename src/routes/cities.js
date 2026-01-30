const express = require('express');
const { getCities } = require('../data/store');

const router = express.Router();

router.get('/', (req, res) => {
  const cities = getCities();
  res.json(cities);
});

module.exports = router;
