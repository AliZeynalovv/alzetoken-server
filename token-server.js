const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/tokenal", (req, res) => {
    const token = generateFakeToken();
    res.json({ token });
});

function generateFakeToken() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

app.listen(PORT, () => {
    console.log(`✅ Token sunucusu çalışıyor: http://localhost:${PORT}`);
});

