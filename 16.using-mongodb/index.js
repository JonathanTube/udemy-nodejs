const { ObjectId } = require("mongodb")
const { MongoClient, ServerApiVersion } = require("mongodb")
const uri =
  "mongodb+srv://Jonathan:yWX4pilcEnbWrXdX@cluster0.xbi8tqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()

    // Send a ping to confirm a successful connection
    await client.db("test").command({ ping: 1 })

    const collection = await client.db("test").collection("products")

    // save data
    await collection.insertOne({
      name: "product1",
      price: 100,
      description: "product1 description",
    })
    await collection.insertOne({
      name: "product2",
      price: 200,
      description: "product2 description",
      category: "category1",
      tags: ["tag1", "tag2"],
    })

    // find one product
    await collection
      .find({
        _id: new ObjectId("667ae75946d0b48f23a3fa21"),
      })
      .next()
      .then((res) => {
        console.log(res)
      })

    // find more than one product
    await collection
      .find()
      .toArray()
      .then((res) => {
        console.log(res)
      })

    await collection.updateOne(
      {
        name: "product1",
      },
      {
        $set: {
          name: "new product name",
          price: 210,
        },
      }
    )

    await collection.deleteMany({
      name: "product2",
    })

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)
