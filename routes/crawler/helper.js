const https = require("https")
const pdfreader = require("pdfreader")

const bufferize = (url) => {
  let hn = url.substring(url.search("//") + 2)
  hn = hn.substring(0, hn.search("/"))

  let pt = url.substring(url.search("//") + 2)
  pt = pt.substring(pt.search("/"))

  const options = { hostname: hn, port: 443, path: pt, method: "GET" }

  return new Promise(function (resolve, reject) {
    let buff = new Buffer.alloc(0)

    const req = https.request(options, (res) => {
      res.on("data", (d) => {
        buff = Buffer.concat([buff, d])
      })
      res.on("end", () => {
        resolve(buff)
      })
    })

    req.on("error", (e) => {
      console.error("https request error: " + e)
    })

    req.end()
  })
}
 
const readlines = (buffer, xwidth) => {
  return new Promise((resolve, reject) => {
    let pdftxt = new Array()

    new pdfreader.PdfReader().parseBuffer(buffer, (err, item) => {
      if(err){
        console.log("pdf reader error: " + err)
        reject(err)
      }
      else if(!item){
        resolve(pdftxt)
      } else {
        pdftxt.push(item)
      }
    })
  })
}

module.exports = {
  bufferize,
  readlines
}
