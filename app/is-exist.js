const commandExists = require('command-exists');

function isExist(command) {
  if (commandExists.sync(command)) {
    return true;
  }
  return false;
}

module.exports = isExist;
