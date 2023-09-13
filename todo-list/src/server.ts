import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { join } from "path";
const app: Express = express();
const port = 3000 || process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static(join(__dirname, "../public")));

app.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
});

let tasks: any[] = [];

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body.task);
  res.json({ success: true });
});
