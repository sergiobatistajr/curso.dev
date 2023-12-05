import express from "express";

const app = express();
app.use(express.json());

app.get("/api/v1/status", (req, res) => res.status(200).json("são tops"));

app.listen(3000, () => console.log("Online!!!"));

export default app;
