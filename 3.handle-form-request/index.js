const http = require("http")

const server = http.createServer((req, res) => {
  const { url, method } = req
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write("<html>")
    res.write("<body>")
    res.write("<form action='/submit'>")
    res.write("<input type='text' name='name'>")
    res.write("<button type='submit'>Submit</button>")
    res.write("</form>")
    res.write("</body>")
    res.write("</html>")
    return res.end()
  }
})

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
