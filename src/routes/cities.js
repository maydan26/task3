const express = require('express');
const { getCities } = require('../data/store');

const router = express.Router();

router.get('/', (req, res) => {
  let cities = getCities();

  const { search } = req.query;
  if (search) {
    cities = cities.filter(city =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(cities);
});

module.exports = router;
