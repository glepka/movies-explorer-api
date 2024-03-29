const jwt = require('jsonwebtoken');
const Unauthorized = require('../errors/Unauthorized');
const { JWT_SECRET_DEV } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  let payload;

  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new Unauthorized('Необходима авторизация!');
    }
    const token = authorization.replace('Bearer ', '');
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_SECRET_DEV);
  } catch (err) {
    next(new Unauthorized('Необходима авторизация!'));
    return;
  }

  req.user = payload;

  next();
};
