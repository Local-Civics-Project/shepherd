const axios = require("axios")
const scrapy = require("node-scrapy")

const { City } = require("./model")

const scrapper = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        console.log(scrapy.extract(response.data, "input"))
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const config = {
  name: "Surat Gujarat 2020",
  url: "https://www.suratmunicipal.gov.in/Corporation/CorpDetail",
  city: "Surat",
  state: "Gujarat",
  scrapper,
}

module.exports = new City(config)
