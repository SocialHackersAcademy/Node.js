
function leftpad(val, num, str) {
    return '00000000'.replace(/0/g, str).slice(0, num - val.length) + val;
  };

  module.exports = leftpad;