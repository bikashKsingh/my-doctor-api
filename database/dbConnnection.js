const mongoose = require("mongoose");

module.exports.connect = async function () {
  try {
    const dbResponse = await mongoose.connect(
      "mongodb+srv://bikash:Bikash100@cluster0.jsacefy.mongodb.net/doctor_db?retryWrites=true&w=majority&appName=Cluster0"
    );

    if (dbResponse) {
      console.log(
        `Database connected!\n Host : ${dbResponse.connection?.host}\n Port : ${dbResponse.connection.port}\n Name : ${dbResponse.connection.name}`
      );
    }
  } catch (error) {
    console.log(`Database connection error!`, error.message);
  }
};
