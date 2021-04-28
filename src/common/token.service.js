const jwt = require('jsonwebtoken');
const { INVALID_TOKEN, MISSING_TOKEN } = require('../common/error/error-type');
const secret = 'custom-secret';

const generateToken = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: '24h' }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};

const tokenIsValid = token => {
  if (!token) {
    return Promise.reject({ type: MISSING_TOKEN });
  }
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, payload) => {
      if (error) {
        reject({ type: INVALID_TOKEN });
      } else {
        resolve(payload);
      }
    });
  });
}

module.exports = {
  generateToken,
  tokenIsValid
}
