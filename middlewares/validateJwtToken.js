const { serverResponse } = require("../constants/serverResponse");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

module.exports.validateAdminToken = function (req, res, next) {
  let response = _.cloneDeep(serverResponse);

  try {
    let authorization = req.headers.authorization;
    if (!authorization) {
      response.errors = { token: "Token is missing" };
      response.message = "Token is missing";
      res.status(response.statusCode).send(response);
    }

    let token = authorization.split(" ")[1];
    let decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
    let id = decoded.id;
    req.adminId = id;

    next();
  } catch (error) {
    response.errors = { token: error.message };
    response.message = error.message;
    res.status(response.statusCode).send(response);
  }
};

module.exports.validateUserToken = function (req, res, next) {
  let response = _.cloneDeep(serverResponse);

  try {
    let authorization = req.headers.authorization;
    if (!authorization) {
      response.errors = { token: "Token is missing" };
      response.message = "Token is missing";
      res.status(response.statusCode).send(response);
    }

    let token = authorization.split(" ")[1];
    let decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
    let id = decoded.id;
    req.userId = id;

    next();
  } catch (error) {
    response.errors = { token: error.message };
    response.message = error.message;
    res.status(response.statusCode).send(response);
  }
};
