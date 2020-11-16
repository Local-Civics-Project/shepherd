const express = require('express')
const router = express.Router()
const crawler = require("./crawler")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/surat", (req, res, next) => {
  crawler.get("surat_gujarat").scrap()
  res.send("bleh")
})

module.exports = router;
