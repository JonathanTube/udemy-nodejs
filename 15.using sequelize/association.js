const { DataTypes } = require("sequelize")

const sequelize = require("./util")

const Member = sequelize.define("member", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
})

const CartItem = sequelize.define("cartItem", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
})

const Address = sequelize.define(
  "address",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
)

// https://sequelize.org/docs/v6/core-concepts/assocs/
Member.hasMany(Address)
Member.hasOne(Cart)
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

sequelize.sync({ force: true }).then(async () => {
  const product = await Product.create({
    name: "iphone",
    price: 10000,
    description: "iphone 12",
  })

  const member = await Member.create({
    name: "Jonathan",
  })

  const cart = await member.createCart()

  await cart.addProduct(product, {
    through: {
      quantity: 100,
    },
  })

  const cart1 = await Cart.findOne({
    where: {
      id: cart.id,
    },
    include: [Product],
  })

  cart1.products.forEach((product) => {
    console.log("product name=", product.name)
  })
  sequelize.close()
})
