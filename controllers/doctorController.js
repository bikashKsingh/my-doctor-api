const doctorService = require("../services/doctorService");
const { serverResponse } = require("../constants/serverResponse");
const _ = require("lodash");

// create
module.exports.create = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await doctorService.create(req.body);

    if (serviceResponse.isOkey) {
      response.statusCode = serviceResponse.statusCode;
      response.body = serviceResponse.body;
      response.message = serviceResponse.message;
    } else {
      response.statusCode = serviceResponse.statusCode;
      response.message = serviceResponse.message;
      response.errors = serviceResponse.errors || null;
    }
  } catch (error) {
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};
