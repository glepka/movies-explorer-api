const INTERNAL_SERVER_ERROR = require('../errors/StatusCode');

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.statusCode) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  return () => {
    res.status(INTERNAL_SERVER_ERROR).send({ message: 'Произошла ошибка на сервере' });
    next();
  };
};

module.exports = errorHandler;
