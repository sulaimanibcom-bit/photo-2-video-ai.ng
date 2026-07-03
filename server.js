const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("FlowAI Server Running 🚀");
});

app.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    res.json({
        success: true,
        message: "Request received.",
        prompt: prompt
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});
