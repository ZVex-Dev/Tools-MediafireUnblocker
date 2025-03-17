const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
    let { url } = req.body;

    const match = url.match(/quickkey=([a-zA-Z0-9]+)/);
    if (!match) return res.json({ error: "Invalid MediaFire URL" });

    let quickkey = match[1];
    let linkAlternatif = `https://www.mediafire.com/?qkxdxntzw1p4p7y,${quickkey}`;

    res.json({ linkAlternatif });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
