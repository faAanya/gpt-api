import express from "express";
import cors from 'cors';
import generate from "./generate.js";

const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello world from api");
})


app.post("/generate", async (req, res) => {
    const queryDesc = req.body.queryDesc;
    try {
        const airesponse = await generate(queryDesc);
        res.json({ response: airesponse })
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }

    res.json({ res: `you sent this ${queryDesc}` });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})