const { BAD_REQUEST_CODE } = require('./StatusCode');

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQUEST_CODE;
  }
}

module.exports = BadRequest;
