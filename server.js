const express = require("express");
const app = express();
const port = 6000;

const stockPriceRoute = require("./routes/stockPrice");

app.use("/api/stock-price", stockPriceRoute);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
