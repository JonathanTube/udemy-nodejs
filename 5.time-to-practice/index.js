const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  const { url } = req
  if (url === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>My first html page</title></head>")
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'/><button>submit</button></form></body>"
    )
    res.write("</html>")
    res.end()
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html")
    res.write("<html>")
    res.write("<head><title>Assignment 1</title></head>")
    res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>")
    res.write("</html>")
    res.end()
  }

  if (url === "/create-user") {
    const body = []
    req.on("data", (chunk) => {
      body.push(chunk)
    })
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log("parsedBody=", parsedBody)
    })
    res.statusCode = 302
    res.setHeader("Location", "/")
    res.end()
  }
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
