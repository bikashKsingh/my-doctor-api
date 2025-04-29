const { serverResponse } = require("../constants/serverResponse");
const doctorModel = require("../database/models/doctorModel");
const { doctorMessage } = require("../constants/message");
const _ = require("lodash");

module.exports.create = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const newData = new doctorModel(serviceData);
    const result = await newData.save();

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 201;
      response.message = doctorMessage.CREATED;
    } else {
      response.message = doctorMessage.NOT_CREATED;
    }
  } catch (error) {
    response.message = doctorMessage.NOT_CREATED;
    response.errors = { databse: error.message };
  }

  return response;
};
