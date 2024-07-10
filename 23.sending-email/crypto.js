// https://nodejs.org/download/docs/v6.14.2/api/crypto.html#crypto_new_crypto_certificate
const crypto = require("crypto")
crypto.randomBytes(128, (err, buffer) => {
  if (err) throw err
  console.log(buffer.toString("hex"))
})
