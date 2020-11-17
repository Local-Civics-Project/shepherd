const { City } = require("./model")
const { bufferize, readlines } = require("./helper")

const parse = (pdftxt) => {
  let candidate_name = ""
  let names = new Set()
  let start = false

  const sr_no_format = /^\d+\.$/
  const num_format = /^\d+/

  pdftxt.forEach((item) => {
    if(sr_no_format.test(item.text)){
      candidate_name = ""
      start = true
    }
    else if(num_format.test(item.text)){
      names.add(candidate_name.trim())
      start = false
    }
    else if(start){
      candidate_name += " " + item.text
    }
  })

  return names
}

const scrapper = (url) => {
  return new Promise(async (resolve, reject) => {
    const buffer = await bufferize(url);
    const lines = await readlines(buffer);
    const parsed = Array.from(parse(lines))
    let data = []

    parsed.forEach((item) => {
      data.push([item])
    })

    resolve(data)
  })
}

const config = {
  name: "Vadodara Gujarat",
  url: "https://vmc.gov.in/pdf/Incumbency%20Chart%20(2018).pdf",
  city: "Vadodara",
  state: "Gujarat",
  scrapper,
}

module.exports = new City(config)
