import * as dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export const a = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const key = process.env.KEY;

export const buildString = (str: string) => `${str}&appid=${key}&units=metric`;
