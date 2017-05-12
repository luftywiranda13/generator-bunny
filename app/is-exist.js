const commandExists = require('command-exists');

const isYarn = command => !!commandExists.sync(command);

module.exports = isYarn;
