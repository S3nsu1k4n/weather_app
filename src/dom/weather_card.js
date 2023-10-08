import { Div, H2, P } from "./elements";

export class WeatherCard extends Div{
  constructor(){
    super();
    this.add_class('weather_card');
    this.cloud;
    this.humidity;
    this.temp_c;
    this.icon;
    this.wind_dir;
    this.wind_kph;
    this.init();
  }

  init = () => {
    const title = new H2('Weather');
    this.cloud = new P('???');
    this.humidity = new P('???');
    this.temp_c = new P('???');
    this.icon = new P('???');
    this.wind_dir = new P('???');
    this.wind_kph = new P('???');
    this.add_node(title,
      new P('Cloud:'), this.cloud,
      new P('Humidity:'), this.humidity,
      new P('Temperatur C:'), this.temp_c,
      new P('Wind direction:'), this.wind_dir,
      new P('Wind velocity:'), this.wind_kph
      );}

  set_values = weather => {
    this.cloud.set_text(weather.cloud);
    this.humidity.set_text(weather.humidity);
    this.temp_c.set_text(weather.temp_c);
    this.wind_dir.set_text(weather.wind_dir);
    this.wind_kph.set_text(weather.wind_kph);
  }
}