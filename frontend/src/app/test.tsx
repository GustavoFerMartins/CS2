const HLTV = require("hltv-api").default;
const express = require("express");
const app = express();

app.get("/results", async (req, res) => {
    const results = await HLTV.getResults();
    res.json(results);
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
