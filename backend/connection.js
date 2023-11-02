const mongoose = require("mongoose");
let dotenv = require("dotenv")
dotenv.config();

// connect
const URI = xxxx
//in case it doesnt work
//URI = process.env.MONGODB_URI


main()
  .then(() => console.log(`DB is connected`))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main;
