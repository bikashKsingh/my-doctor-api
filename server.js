const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./database/dbConnnection");
const app = express();
dotenv.config();

dbConnection.connect();

app.use(express.json());

app.use("/api/v1/doctors", require("./routes/doctorRouter"));

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
