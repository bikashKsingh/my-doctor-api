const doctorService = require("../services/doctorService");

// create
module.exports.create = function (req, res) {
  const serviceResponse = doctorService.create();
  res.send(serviceResponse);
};
