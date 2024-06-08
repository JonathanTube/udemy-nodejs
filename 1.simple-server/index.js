const http = require("http")

const server = http.createServer((req, res) => {
  const { url, method, headers } = req
  let json = {
    url: url,
    method: method,
    headers: headers,
  }
  //   res.statusCode = 200
  //   res.setHeader("Content-Type", "application/json")
  res.writeHead(200, {
    "Content-Type": "application/json",
    "My-Resp-Header": "Jonathan",
  })
  res.write(JSON.stringify(json))
  //   res.end(JSON.stringify(json))
  res.end()
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
