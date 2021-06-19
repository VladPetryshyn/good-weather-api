import express from "express";
import { a, buildString } from "../axios";

export const weatherRouter = express.Router();

weatherRouter.get("/currentWeather", async (req, res) => {
  const { city } = req.query;

  try {
    const response = (await a.get(buildString(`/weather?q=${city}`))).data;

    res.status(200).json(response);
  } catch (err) {
    console.log(err)
    res.status(404).json({message: err.response.statusText});
  }
});
