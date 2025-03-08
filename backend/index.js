import express from "express";
import "dotenv/config";


const app = express();

app.use(express.json());

// health check endpoint
app.get("/hru", (req, res) => {
    return res.status(200).json({
        message: "I am fine!"
    });
});


app.listen(process.env.DEV_PORT, () => {
    console.log(`The server is up and listening on port: ${process.env.DEV_PORT}`);
});