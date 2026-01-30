const express = require('express');
const { getCityById, getRestaurantsByCityId } = require('../data/store');

const router = express.Router({ mergeParams: true });

router.get('/:cityId/restaurants', (req, res) => {
  const { cityId } = req.params;
  const city = getCityById(cityId);

  if (!city) {
    return res.status(404).json({
      error: 'City not found',
      cityId,
    });
  }

  const list = getRestaurantsByCityId(cityId);
  if (list.length === 0) {
    return res.status(404).json({
      error: 'No restaurants found in this city',
      cityId,
    });
  }

  res.json(list);
});

module.exports = router;
