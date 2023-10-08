import { Div, H2, P } from "./elements";

export class LocationCard extends Div{
  constructor(){
    super();
    this.add_class('location_card');
    this.city;
    this.country;
    this.region;
    this.localtime;
    this.init();
  }

  init = () => {
    const title = new H2('Location');
    this.city = new P('???');
    this.country = new P('???');
    this.region = new P('???');
    this.localtime = new P('???');
    this.add_node(title, this.city, this.country, this.region, this.localtime);
  }

  set_values = location => {
    this.city.set_text(location.name);
    this.country.set_text(location.country);
    this.region.set_text(location.region);
    this.localtime.set_text(location.localtime);
  }
}