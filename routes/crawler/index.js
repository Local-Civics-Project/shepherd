const surat_gujarat = require("./surat-gujarat")
const vadodara_gujarat = require("./vadodara-gujarat")

// Register the crawler here
module.exports = new Map([
  ["surat_gujarat", surat_gujarat],
  ["vadodara_gujarat", vadodara_gujarat]
])
