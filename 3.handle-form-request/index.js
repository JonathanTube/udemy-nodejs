const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  const { url, method } = req
  console.log("url=", url, "method=", method)
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write("<html>")
    res.write("<body>")
    res.write("<form action='/save' method='POST'>")
    res.write("<input type='text' name='name'>")
    res.write("<button type='submit'>Submit</button>")
    res.write("</form>")
    res.write("</body>")
    res.write("</html>")
    return res.end()
  }

  if (url === "/save" && method === "POST") {
    const reqContent = []
    // event listener: when receiving data
    req.on("data", (trunk) => {
      reqContent.push(trunk)
    })
    // event listener: when receiving end of data
    req.on("end", () => {
      const parsedContent = Buffer.concat(reqContent).toString()
      fs.appendFileSync("./message.txt", parsedContent + "\r\n")
    })
    // redirect code must be 302 to tell the browser to redirect to the destination url.
    res.statusCode = 302
    // set the header to tell the browser to redirect to the destination url.
    res.setHeader("Location", "/")
    return res.end()
  }

  res.end("invalid request")
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
