const camelCase = require('lodash.camelcase');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const shell = require('shelljs');

module.exports = class extends Generator {
  prompting() {
    this.log();

    return this.prompt([
      {
        name: 'moduleName',
        message: 'Module name:',
        default: this.appname.replace(/\s/g, '-'),
      },
      {
        name: 'description',
        message: 'Description:',
        default: 'as cute as bunny',
        store: true,
      },
      {
        name: 'global',
        message: 'Let user install as global:',
        type: 'confirm',
        default: false,
      },
      {
        name: 'name',
        message: "Author's name:",
        default: this.user.git.name(),
        store: true,
      },
      {
        name: 'email',
        message: "Author's email:",
        default: this.user.git.email(),
        store: true,
      },
      {
        name: 'githubUsername',
        message: 'GitHub username:',
        store: true,
      },
      {
        name: 'website',
        message: 'Website:',
        store: true,
      },
    ]).then((props) => {
      this.log();

      this.tpl = {
        moduleName: kebabCase(props.moduleName).toLowerCase(),
        camelModule: camelCase(props.moduleName),
        description: props.description,
        global: props.global,
        name: props.name,
        email: props.email,
        githubUsername: props.githubUsername,
        website: props.website,
      };

      this.spawnCommand('git', ['init', '--quiet']);
    });
  }
  writing() {
    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };

    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      this.tpl
    );

    mv('_all-contributorsrc', '.all-contributorsrc');
    mv('_babelrc', '.babelrc');
    mv('_editorconfig', '.editorconfig');
    mv('_eslintignore', '.eslintignore');
    mv('_eslintrc.json', '.eslintrc.json');
    mv('_flowconfig', '.flowconfig');
    mv('_gitattributes', '.gitattributes');
    mv('_github/issue_template.md', '.github/issue_template.md');
    mv(
      '_github/pull_request_template.md',
      '.github/pull_request_template.md'
    );
    mv('_gitignore', '.gitignore');
    mv('_npmrc', '.npmrc');
    mv('_package.json', 'package.json');
    mv('_travis.yml', '.travis.yml');
    mv('src/index._test_.js', 'src/index.test.js');
  }
  install() {
    this.log('\x1Bc');
    this.log();
    this.log(
      chalk.green('Important files have been generated to your directory')
    );

    this.log();
    this.log('Installing dependencies...');
    this.log('This might take a couple minutes');
    this.log();

    this.installDependencies({
      bower: false,
      npm: true,
      skipMessage: true,
    });
  }
  end() {
    this.log();
    this.log(`Installing ${chalk.cyan('libdefs...')}`);
    this.log();
    shell.exec('npm start flow.typed', { silent: true });

    this.log(chalk.cyan(`Thanks for using generator-bunny, ${this.tpl.name}!`));
    this.log();

    shell.rm('.yo-rc.json');
    shell.exec('git add -A', { silent: true });
    shell.exec('git commit -qnm "chore: initial commit"', {
      silent: true,
    });
  }
};
