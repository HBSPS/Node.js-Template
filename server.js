import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev"); // 개발환경: dev || 배포환경: combined

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;