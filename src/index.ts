import * as dotenv from "dotenv";
import express from "express";
import { oneCallRouter } from "./routes/oneCall";
import { weatherRouter } from "./routes/weather";
import cors from "cors";

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use("/weather", weatherRouter);
app.use("/oneCall", oneCallRouter);

app.listen(process.env.PORT || "3001", () => console.log("running the server"));

export default app;
