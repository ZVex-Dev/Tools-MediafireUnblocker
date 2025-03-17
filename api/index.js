const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/unblock", (req, res) => {
    const { url } = req.query;
    
    if (!url || !url.includes("mediafire.com")) {
        return res.status(400).json({ error: "URL tidak valid" });
    }

    try {
        let newUrl = url.replace("www.mediafire.com", "www.mediafire.com/file");
        newUrl += "?dkey=2p96cmomcgw&r=33"; 

        res.json({ original: url, unblocked: newUrl });
    } catch (error) {
        res.status(500).json({ error: "Gagal memproses link" });
    }
});

module.exports = app;