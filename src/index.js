import "./css";
import { Body, Div, H1, Header, LocationCard, Searchbar, WeatherCard } from "./dom";
import { WeatherAPI } from "./weather_api";

const weather_api = new WeatherAPI();

const body = new Body();

const header = new Header();

const contents = new Div();
const contents_title = new H1('Weather');
const searchbar = new Searchbar('City');

const location_card = new LocationCard();
const weather_card = new WeatherCard();

searchbar.on_button_click(async event => {
  event.preventDefault();
  await weather_api.get_data(searchbar.value);
  location_card.set_values(weather_api.location);
  weather_card.set_values(weather_api.weather);
})

contents.add_node(contents_title, searchbar, location_card, weather_card);

body.add(header, contents);