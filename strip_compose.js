var blockLoader = require('block-loader');
var options = {
  start: 'composes',
  end: ';',
  process: function () {
    return '';
  }
};

module.exports = blockLoader(options);
