import database from "../../infra/database";
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/v1/status", async (req, res) => {
  const result = await database.query("SELECT 1+1 as sum");
  console.log(result.rows[0]);
  return res.status(200).json("são tops");
});

app.listen(3000, () => console.log("Online!!!"));
