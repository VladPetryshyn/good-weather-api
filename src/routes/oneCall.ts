import express from "express";
import {a, buildString} from "../axios";

export const oneCallRouter = express.Router();

oneCallRouter.get("/hourlyForecast", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = (await a.get(buildString(`onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts`))).data.hourly;
    res.status(200).json(response);
  } catch {
    res.status(400).json({message: "error"});
  }
});
