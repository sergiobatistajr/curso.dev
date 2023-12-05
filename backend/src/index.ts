import database from "../../infra/database";
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/v1/status", async (req, res) => {
  const updateAt = new Date();
  const databaseVersion = (await database.query("SHOW server_version;")).rows[0]
    .server_version;
  const databaseMaxConnections = (await database.query("SHOW max_connections;"))
    .rows[0].max_connections;
  const databaseCurrentConnections = (
    await database.query(
      "SELECT count(*) FROM pg_stat_activity WHERE state = 'active';",
    )
  ).rows[0].count;

  return res.status(200).json({
    update_at: updateAt,
    dependecies: {
      database: {
        version: databaseVersion,
        max_connections: databaseMaxConnections,
        current_connections: databaseCurrentConnections,
      },
    },
  });
});

app.listen(3000, () => console.log("Online!!!"));
