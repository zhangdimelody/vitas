'use strict';

const encryptPhone = (phone) => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
};

var main = {
  encryptPhone
};

module.exports = main;
