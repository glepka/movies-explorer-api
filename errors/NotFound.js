const { NOT_FOUND_CODE } = require('./StatusCode');

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND_CODE;
  }
}

module.exports = NotFound;
