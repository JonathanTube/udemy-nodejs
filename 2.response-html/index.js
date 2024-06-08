const http = require("http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.write("<html>")
  res.write("<head><title>My first html page</title></head>")
  res.write("<body><strong>This is a html body.</strong></body>")
  res.write("</html>")
  res.end()
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
