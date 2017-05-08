const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');

module.exports = class extends Generator {
  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: this.appname.replace(/\s/g, '-'),
        filter: x => kebabCase(x).toLowerCase(),
      },
      {
        name: 'devDep',
        message: 'Should people install this as one of their devDependencies?',
        default: true,
        type: 'confirm',
      },
      {
        name: 'description',
        message: "What's the project description?",
        type: 'input',
      },
    ]).then((props) => {
      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      this.fs.copyTpl(
        [`${this.templatePath()}/**`],
        this.destinationPath(),
        props,
      );

      mv('_package.json', 'package.json');
      mv('all-contributorsrc', '.all-contributorsrc');
      mv('babelrc', '.babelrc');
      mv('editorconfig', '.editorconfig');
      mv('eslintignore', '.eslintignore');
      mv('eslintrc.json', '.eslintrc.json');
      mv('flowconfig', '.flowconfig');
      mv('gitattributes', '.gitattributes');
    });
  }
  install() {
    this.spawnCommand('git', ['init']);
    this.yarnInstall();
  }
};
