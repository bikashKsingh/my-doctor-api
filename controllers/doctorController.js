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
    console.log(
      `controllers : doctorController : create Error - ${error.message} `
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
    const serviceResponse = await doctorService.findAll(req.params);

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
      `controllers : doctorController : findAll Error - ${error.message} `
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
    const serviceResponse = await doctorService.findOne(req.params);

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
      `controllers : doctorController : findOne Error - ${error.message} `
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
    const serviceResponse = await doctorService.update({
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
      `controllers : doctorController : update Error - ${error.message} `
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
    const serviceResponse = await doctorService.delete(req.params);

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
      `controllers : doctorController : delete Error - ${error.message} `
    );
    response.statusCode = 400;
    response.message = error.message;
    response.errors = {
      error: error.message,
    };
  }

  res.status(response.statusCode).send(response);
};
