const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let markets = [
  { id: 1, title: "ETH > $5k by 2025?", yes: 60, no: 40 },
  { id: 2, title: "BTC new ATH this year?", yes: 72, no: 28 }
];

app.get("/markets", (req, res) => {
  res.json(markets);
});

app.post("/markets", (req, res) => {
  const newMarket = { id: Date.now(), ...req.body };
  markets.push(newMarket);
  res.json(newMarket);
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
