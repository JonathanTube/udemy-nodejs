module.exports = {
  getUserList: (req, res) => {
    res.header("Content-Type", "application/json")
    res.status(200)
    res.send([
      {
        name: "Jonathan",
        age: 20,
        gender: "male",
      },
      {
        name: "Erin",
        age: 20,
        gender: "female",
      },
    ])
  },
  getUserDetail: (req, res) => {
    // get parameters from url path
    const params = req.params
    console.log("id=", params.id)
    // get parameters from url.
    const query = req.query
    console.log("query=", query)

    res.header("Content-Type", "application/json")
    res.status(200)
    res.send({
      name: "Jonathan",
      age: 20,
      gender: "male",
    })
  },
}
