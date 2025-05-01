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
    console.log(`services : doctorService : create Error - ${error.message} `);
    response.message = doctorMessage.NOT_CREATED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.findAll = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await doctorModel.find();

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = doctorMessage.FETCHED;
    } else {
      response.message = doctorMessage.NOT_FETCHED;
    }
  } catch (error) {
    console.log(`services : doctorService : findAll Error - ${error.message} `);
    response.message = doctorMessage.NOT_FETCHED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.findOne = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await doctorModel.findById(serviceData.id);

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = doctorMessage.FETCHED;
    } else {
      response.message = doctorMessage.NOT_FETCHED;
    }
  } catch (error) {
    console.log(`services : doctorService : findOne Error - ${error.message} `);
    response.message = doctorMessage.NOT_FETCHED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.update = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    let id = serviceData.id;
    let body = serviceData.body;

    const result = await doctorModel.findByIdAndUpdate(id, body, { new: true });

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = doctorMessage.UPDATED;
    } else {
      response.message = doctorMessage.NOT_UPDATED;
    }
  } catch (error) {
    console.log(`services : doctorService : update Error - ${error.message} `);
    response.message = doctorMessage.NOT_UPDATED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.delete = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await doctorModel.findByIdAndDelete(serviceData.id);

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = doctorMessage.DELETED;
    } else {
      response.message = doctorMessage.NOT_DELETED;
    }
  } catch (error) {
    console.log(`services : doctorService : delete Error - ${error.message} `);
    response.message = doctorMessage.NOT_DELETED;
    response.errors = { error: error.message };
  }

  return response;
};
