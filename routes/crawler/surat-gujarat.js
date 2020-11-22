const axios = require("axios")
const cheerio = require("cheerio")

const { City } = require("./model")

const scrapper = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        const $ = cheerio.load(response.data)

        const extracted = $("input.btn-as-link").toArray()

        let data = []

        extracted.forEach((item) => {
          data.push([item.attribs.value])
        })

        resolve(data)
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
