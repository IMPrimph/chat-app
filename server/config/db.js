const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("DB connected");
    });
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
};

module.exports = connectDB;
