const multer = require("multer")

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

// Set up filter for uploaded files
const filter = (req, file, cb) => {
  // only image file type can be accepted.
  console.log(file.mimetype)
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true)
  } else {
    cb(new Error("Only image file type can be accepted."))
  }
}

// Create the multer instance
const upload = multer({ storage: storage, fileFilter: filter })

module.exports = upload
