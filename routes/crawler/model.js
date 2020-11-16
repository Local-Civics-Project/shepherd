class City {
  constructor(config){
    this.url = config.url
    this.city = config.city
    this.state = config.state
    this.scrapper = config.scrapper
  }

  scrap(){
    this.data = this.scrapper(this.url)

    return this.data 
  }
}

module.exports = {
  City
}
