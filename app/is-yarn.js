const commandExists = require('command-exists');

const isYarn = () => !!commandExists.sync('yarn');

module.exports = isYarn;
