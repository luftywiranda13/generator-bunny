const commandExists = require('command-exists');

const isExist = command => !!commandExists.sync(command);

module.exports = isExist;
