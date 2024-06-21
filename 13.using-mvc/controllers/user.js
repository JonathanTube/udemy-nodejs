module.exports = {
  getUserList: (req, res) => {
    res.header("Content-Type", "application/json")
    res.status(200)
    res.send([
      {
        name: "Jonathan",
        age: 20,
        gender: "male"
      },
      {
        name: "Erin",
        age: 20,
        gender: "female"
      }
    ])
  },
  getUserDetail: (req, res) => {
    res.header("Content-Type", "application/json")
    res.status(200)
    res.send({
      name: "Jonathan",
      age: 20,
      gender: "male"
    })
  }
}
