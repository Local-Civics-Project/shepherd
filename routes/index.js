const express = require('express')
const router = express.Router()
const crawler = require("./crawler")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { 
    scrapperList: crawler
  })
})

router.get("/scrapper/:scrapperid", (req, res) => {
  const city = crawler.get(req.params.scrapperid)
  city.scrap()
    .then((val) => {
      // res.json({ data: val })
      res.render("scrapped_data", { data: val })
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router;
