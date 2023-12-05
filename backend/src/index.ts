import * as express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.status(200).json("opa"));

app.listen(3000);

export default app;
