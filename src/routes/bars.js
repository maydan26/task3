const express = require('express');
const { getCityById, getBarsByCityId } = require('../data/store');

const router = express.Router({ mergeParams: true });

router.get('/:cityId/bars', (req, res) => {
  const { cityId } = req.params;
  const city = getCityById(cityId);

  if (!city) {
    return res.status(404).json({
      error: 'City not found',
      cityId,
    });
  }

  const list = getBarsByCityId(cityId);
  if (list.length === 0) {
    return res.status(404).json({
      error: 'No bars found in this city',
      cityId,
    });
  }

  res.json(list);
});

module.exports = router;
