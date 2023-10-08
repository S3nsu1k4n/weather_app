import { Weather } from "./weather";
import { Location } from "./location";

export class WeatherAPI{
  constructor(){
    this.weather = new Weather();
    this.location = new Location();
    this.url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=`
    this.status;
    this.ok;
  }

  get_data = async city => {
    const response = await fetch(this.url + city, {mode: 'cors'});
    this.status = response.status;
    this.ok = response.ok;
    if (this.ok) {
      const data = await response.json();
      this.location.set_data(data.location);
      this.weather.set_data(data.current);
    }
  }
}