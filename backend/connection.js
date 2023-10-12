const mongoose = require("mongoose");
let dotenv = require("dotenv")
dotenv.config();

// connect
const URI = "mongodb+srv://Antonella:jVeehLoyvLRi41dE@cluster0.oqrfar7.mongodb.net/";
//in case it doesnt work
//URI = process.env.MONGODB_URI


main()
  .then(() => console.log(`DB is connected`))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main;