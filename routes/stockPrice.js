const express = require("express");
const router = express.Router();
const stockPriceData = require("../stock-price");

router.get("/:sku", (req, res) => {
  const sku = req.params.sku;
  const data = stockPriceData[sku];
  if (!data) {
    return res.status(404).json({ message: "Product not found" });
  }
  data.price = (data.price / 100).toFixed(2);
  res.json(data);
});

module.exports = router;
