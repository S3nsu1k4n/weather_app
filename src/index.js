import "./css";
import { WeatherAPI } from "./weather_api";

const weather_api = new WeatherAPI();
weather_api.get_data('shinagawa');

console.log(weather_api.weather);