const mongoose = require('mongoose');
const dbConfig = require('../configs/mongo.json');

async function connectToDb() {
  await mongoose.connect(dbConfig.CONNECTION_STRING);
  connectToDb().catch((err) => {
    console.log(err);
    process.exit(1);
  });
}
