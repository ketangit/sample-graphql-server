import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Sample GraphQL server");
});

app.listen(port, () => {
  return console.log(`Server started and is listening on ${port}`);
});
