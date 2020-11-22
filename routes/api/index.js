const express = require('express')
const router = express.Router()

router.get("/surat", (req, res, next) => {
  crawler.get("surat_gujarat").scrap()
  res.send("bleh")
})

module.exports = router;
