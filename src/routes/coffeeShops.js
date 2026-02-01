const express = require("express");
const { getCityById, getCoffeeShopsByCityId } = require("../data/store");

const router = express.Router({ mergeParams: true });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

router.get("/:cityId/coffee-shops", async (req, res) => {
  const { cityId } = req.params;
  const city = getCityById(cityId);

  if (!city) {
    return res.status(404).json({
      error: "City not found",
      cityId,
    });
  }

  const list = getCoffeeShopsByCityId(cityId);
  if (list.length === 0) {
    return res.status(404).json({
      error: "No coffee shops found in this city",
      cityId,
    });
  }

  await sleep(5000);

  res.json(list);
});

module.exports = router;
