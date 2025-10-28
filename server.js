import "dotenv/config";
import e from "express";
import index from "./routes/index.js";
import db from "./config/db.js";

const app = e();
const port = process.env.PORT || 8000;

app.use(e.json());
app.use("/api", index);

db.once("open", () => {
  app.listen(port, () => console.log("Server online"));
});
