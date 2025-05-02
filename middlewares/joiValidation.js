const _ = require("lodash");
const { serverResponse } = require("../constants/serverResponse");

module.exports.validate = function (schema, place) {
  return function (req, res, next) {
    let data = null;

    if (place == "params") data = req.params;
    else if (place == "body") data = req.body;
    else if (place == "query") data = req.query;

    const validatioResponse = schema.validate(data, {
      abortEarly: false,
    });
    if (validatioResponse.error) {
      let errors = validatioResponse.error.details;

      let modifiedError = {};

      for (let err of errors) {
        let message = err.message;
        let path = err.context.key;

        modifiedError[path] = message;
      }

      let response = _.cloneDeep(serverResponse);
      response.errors = modifiedError;
      response.message = "Validation failed";

      delete response.isOkey;

      res.status(response.statusCode).send(response);
    } else {
      next();
    }
  };
};

// module.exports.validateBody = function (schema) {
//   return function (req, res, next) {
//     let body = req.body;

//     const validatioResponse = schema.validate(body, {
//       abortEarly: false,
//     });
//     if (validatioResponse.error) {
//       let errors = validatioResponse.error.details;

//       let modifiedError = {};

//       for (let err of errors) {
//         let message = err.message;
//         let path = err.context.key;

//         modifiedError[path] = message;
//       }

//       let response = _.cloneDeep(serverResponse);
//       response.errors = modifiedError;
//       response.message = "Validation failed";

//       delete response.isOkey;

//       res.status(response.statusCode).send(response);
//     } else {
//       next();
//     }
//   };
// };

// module.exports.validateParams = function (schema) {
//   return this.validate(schema, "params");

//   //   return function (req, res, next) {
//   //     let params = req.params;

//   //     const validatioResponse = schema.validate(params, {
//   //       abortEarly: false,
//   //     });
//   //     if (validatioResponse.error) {
//   //       let errors = validatioResponse.error.details;

//   //       let modifiedError = {};

//   //       for (let err of errors) {
//   //         let message = err.message;
//   //         let path = err.context.key;

//   //         modifiedError[path] = message;
//   //       }

//   //       let response = _.cloneDeep(serverResponse);
//   //       response.errors = modifiedError;
//   //       response.message = "Validation failed";

//   //       delete response.isOkey;

//   //       res.status(response.statusCode).send(response);
//   //     } else {
//   //       next();
//   //     }
//   //   };
// };

// module.exports.validateQuery = function (schema) {
//   return function (req, res, next) {
//     let params = req.params;

//     const validatioResponse = schema.validate(params, {
//       abortEarly: false,
//     });
//     if (validatioResponse.error) {
//       let errors = validatioResponse.error.details;

//       let modifiedError = {};

//       for (let err of errors) {
//         let message = err.message;
//         let path = err.context.key;

//         modifiedError[path] = message;
//       }

//       let response = _.cloneDeep(serverResponse);
//       response.errors = modifiedError;
//       response.message = "Validation failed";

//       delete response.isOkey;

//       res.status(response.statusCode).send(response);
//     } else {
//       next();
//     }
//   };
// };
