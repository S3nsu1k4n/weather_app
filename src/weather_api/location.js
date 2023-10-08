export class Location{
  constructor(){
    this.country;
    this.localtime;
    this.name;
    this.region;
  }

  set_data = data => {
    this.country = data.country;
    this.localtime = data.localtime;
    this.name = data.name;
    this.region = data.region;
  }
}