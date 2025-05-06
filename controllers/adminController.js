const adminService = require("../services/adminService");
const { serverResponse } = require("../constants/serverResponse");
const _ = require("lodash");

// create
module.exports.create = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.create(req.body);

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
    console.log(
      `controllers : adminController : create Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};

// login
module.exports.login = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.login(req.body);

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
    console.log(
      `controllers : adminController : login Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};

// findAll
module.exports.findAll = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.findAll(req.params);

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
    console.log(
      `controllers : adminController : findAll Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};

// findOne
module.exports.findOne = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.findOne(req.params);

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
    console.log(
      `controllers : adminController : findOne Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};

// update
module.exports.update = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.update({
      id: req.params.id,
      body: req.body,
    });

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
    console.log(
      `controllers : adminController : update Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};

// delete
module.exports.delete = async function (req, res) {
  let response = _.cloneDeep(serverResponse);
  delete response.isOkey;

  try {
    const serviceResponse = await adminService.delete(req.params);

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
    console.log(
      `controllers : adminController : delete Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};
