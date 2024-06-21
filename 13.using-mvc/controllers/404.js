module.exports.getNotFound = (req, res) => {
  res.status(404).header("Content-Type", "text/html").send("<h1>Not Found</h1>")
}
