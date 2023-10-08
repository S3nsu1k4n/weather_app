export class Weather{
  constructor(){
    this.cloud;
    this.humidity;
    this.temp_c;
    this.temp_f;
    this.icon;
    this.wind_dir;
    this.wind_kph;
  }

  set_data = data => {
    this.cloud = data.cloud;
    this.humidity = data.humidity;
    this.temp_c = data.temp_c;
    this.temp_f = data.temp_f;
    this.icon = data.condition.icon;
    this.wind_dir = data.wind_dir;
    this.wind_kph = data.wind_kph;
  }
}

