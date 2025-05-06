const { serverResponse } = require("../constants/serverResponse");
const adminModel = require("../database/models/adminModel");
const { adminMessage } = require("../constants/message");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.create = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    let hashPassword = await bcrypt.hash(serviceData.password, 10);
    serviceData.password = hashPassword;

    const newData = new adminModel(serviceData);
    const result = await newData.save();

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 201;
      response.message = adminMessage.CREATED;
    } else {
      response.message = adminMessage.NOT_CREATED;
    }
  } catch (error) {
    console.log(`services : adminService : create Error - ${error.message} `);
    response.message = adminMessage.NOT_CREATED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.login = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const { mobile, password } = serviceData;

    const result = await adminModel.findOne({ mobile });

    if (result) {
      // compare the password
      let isCorrect = await bcrypt.compare(password, result.password);

      if (isCorrect) {
        let token = jwt.sign({ id: result._id }, process.env.JWT_SECRET);

        response.isOkey = true;
        response.body = { token };
        response.statusCode = 200;
        response.message = adminMessage.FETCHED;
      } else {
        response.errors = { password: "Invalid password" };
        response.message = adminMessage.NOT_FOUND;
      }
    } else {
      response.errors = { mobile: "Invalid mobile number" };
      response.message = adminMessage.NOT_FOUND;
    }
  } catch (error) {
    console.log(`services : adminService : login Error - ${error.message} `);
    response.message = adminMessage.NOT_CREATED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.findAll = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await adminModel.find();

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = adminMessage.FETCHED;
    } else {
      response.message = adminMessage.NOT_FETCHED;
    }
  } catch (error) {
    console.log(`services : adminService : findAll Error - ${error.message} `);
    response.message = adminMessage.NOT_FETCHED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.findOne = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await adminModel.findById(serviceData.id);

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = adminMessage.FETCHED;
    } else {
      response.message = adminMessage.NOT_FETCHED;
    }
  } catch (error) {
    console.log(`services : adminService : findOne Error - ${error.message} `);
    response.message = adminMessage.NOT_FETCHED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.update = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    let id = serviceData.id;
    let body = serviceData.body;

    const result = await adminModel.findByIdAndUpdate(id, body, { new: true });

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = adminMessage.UPDATED;
    } else {
      response.message = adminMessage.NOT_UPDATED;
    }
  } catch (error) {
    console.log(`services : adminService : update Error - ${error.message} `);
    response.message = adminMessage.NOT_UPDATED;
    response.errors = { error: error.message };
  }

  return response;
};

module.exports.delete = async function (serviceData) {
  let response = _.cloneDeep(serverResponse);

  try {
    const result = await adminModel.findByIdAndDelete(serviceData.id);

    if (result) {
      response.isOkey = true;
      response.body = result;
      response.statusCode = 200;
      response.message = adminMessage.DELETED;
    } else {
      response.message = adminMessage.NOT_DELETED;
    }
  } catch (error) {
    console.log(`services : adminService : delete Error - ${error.message} `);
    response.message = adminMessage.NOT_DELETED;
    response.errors = { error: error.message };
  }

  return response;
};
