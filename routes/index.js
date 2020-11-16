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
  crawler.get("surat_gujarat").scrap()
  res.send("bleh")
})

module.exports = router;
