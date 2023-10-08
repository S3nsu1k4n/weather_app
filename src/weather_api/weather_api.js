import { Weather } from "./weather";
import { Location } from "./location";

export class WeatherAPI{
  constructor(){
    this.weather = new Weather();
    this.location = new Location();
    this.url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=`
  }
  get_data = city => {
    fetch(this.url + city, {mode: 'cors'})
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      this.location.set_data(response.location);
      this.weather.set_data(response.current);
    })
  }

}

