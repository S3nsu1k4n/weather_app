import "./css";
import { Body, Div, H1, Header, Searchbar } from "./dom";
import { WeatherAPI } from "./weather_api";

const weather_api = new WeatherAPI();

const body = new Body();

const header = new Header();

const contents = new Div();
const contents_title = new H1('Weather');
const searchbar = new Searchbar('City');
searchbar.on_button_click(event => {
  event.preventDefault();
  weather_api.get_data(searchbar.value);
})
contents.add_node(contents_title, searchbar);

body.add(header, contents);

