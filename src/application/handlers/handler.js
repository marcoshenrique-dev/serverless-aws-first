'use strict';

const dogsList = require("../../../__mocks__/dogs");

module.exports.dogs = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        dogsList
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
