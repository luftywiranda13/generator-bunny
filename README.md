# ⚡️ solid-node-module ⚡️
This is exactly what I use for my own modules.

> Instant [node module][npm-link] starter-kit.

[![GitHub release][release-badge]][release-link]
[![Build Status][build-badge]][build-link]
[![Code Coverage][coverage-badge]][coverage-link]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-link]
[![styled with prettier][prettier-badge]][prettier-link]
[![license][license-badge]][license-link]

[![semantic-release][semantic-badge]][semantic-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![PRs Welcome][prs-badge]][prs-link]
[![Code of Conduct][coc-badge]][coc-link]
[![Roadmap][roadmap-badge]][roadmap-link]
[![Examples][examples-badge]][examples-link]

## The problem
Don't let yourself for always having to setup any [node module][npm-link] or [open-source][open-source-link] projects from scratch.

You should spend your time more on writing codes than setting them up.


## This solution
This repo includes built-in modern tools which are widely-used in the community.
> * Automated GitHub release notes generator
> * Automated releasing with [semantic-release][semantic-link]
> * Automated testing & validation before any commits
> * Automated source-code formatting with [prettier][prettier-link]
> * [Babel][babel-link] transpiler
> * [Eslint][eslint-link]
> * [Flow][flow-link]
> * [Jest][jest-link]
> * [React][react-link]
> * [Travis CI][travis-link]
> * Really? You need me to list them all here? 🐰

So you can shift your focus working on the project itself.


## Setup
#### 1. Get the source code
Clone this repo
```
$ git clone git@github.com:luftywiranda13/solid-node-module.git my-module
```

Remove existing history from this repo
```
$ rm -rf .git
$ git init
```

#### 2. Install dependencies
```
$ npm install
```
You don't have to use [`npm`][npm-link], use [`yarn`][yarn-link] if you want to.

#### 3. Tweak as you need
You may need to change specific things like project name, badges, etc.

#### 4. Validate the project
```
$ npm start validate
```
If it's all good, then you're ready to go!


## How automated releasing works
It's 2017, you don't need to tag, bump version, write changelog, and publish to npm manually by yourself.

This is how to automate those processes:

#### 1. Commit changes like you normally do
Add the changes you made
```
$ git add .
```

But instead of running ```git commit -m "blahblah"```, you need to run
```
npm start commit
```

Choose type of commit, then follow the instructions.

This way, you can make sure anyone who contribute to your repository write useful & meaningful commit message in to it. Then your changelog will be useful to the others too.

#### 2. Push to GitHub
```
$ git push -u origin master
```

Manually do initial publishing to npm. **remember you only need to do this once**
```
npm publish
```

**Notice:** don't bump your project's version manually. Ever!

#### 3. Sit back and relax
Now let [Travis CI][travis-link] and [semantic-release][semantic-link] do the releasing stuffs for you ☕ 💅


## Tips
To find some more additional scripts you can run inside the project, run ```npm start``` on your terminal.

Those scripts are provided by [nps][nps-link].


## Inspiration
Heavily inspired from [Sindre Sorhus][sindresorhus-link] & [Kent C. Dodds][kentcdodds-link].


## Other Solutions
I'm not aware of any. If you are, please [make a pull request][prs-link] and add it
here!

## Contributors
Thanks goes to these people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>Lufty Wiranda</sub>](https://www.instagram.com/luftywiranda13)<br />[💻](https://github.com/luftywiranda13/solid-node-module/commits?author=luftywiranda13 "Code") [📖](https://github.com/luftywiranda13/solid-node-module/commits?author=luftywiranda13 "Documentation") [🔌](#plugin-luftywiranda13 "Plugin/utility libraries") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors-link] specification.
Contributions of any kind are welcome!

## License
MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13).


[all-contributors-link]: https://github.com/kentcdodds/all-contributors
[babel-link]: https://babeljs.io
[build-badge]: https://img.shields.io/travis/luftywiranda13/solid-node-module.svg
[build-link]: https://travis-ci.org/luftywiranda13/solid-node-module
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg
[coc-link]: https://github.com/luftywiranda13/solid-node-module/blob/master/other/CODE_OF_CONDUCT.md
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-link]: http://commitizen.github.io/cz-cli
[coverage-badge]: https://img.shields.io/codecov/c/github/luftywiranda13/solid-node-module.svg
[coverage-link]: https://codecov.io/github/luftywiranda13/solid-node-module
[eslint-link]: http://eslint.org/
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg
[examples-link]: https://github.com/luftywiranda13/solid-node-module/blob/master/other/EXAMPLES.md
[flow-link]: https://flow.org/
[greenkeeper-badge]: https://badges.greenkeeper.io/luftywiranda13/solid-node-module.svg
[greenkeeper-link]: https://greenkeeper.io
[jest-link]: https://facebook.github.io/jest
[kentcdodds-link]: https://github.com/kentcdodds
[license-badge]: https://img.shields.io/github/license/luftywiranda13/solid-node-module.svg
[license-link]: https://github.com/luftywiranda13/solid-node-module/blob/master/LICENSE
[npm-link]: https://www.npmjs.com/
[nps-link]: https://github.com/kentcdodds/nps
[open-source-link]: https://en.wikipedia.org/wiki/Open-source_software
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier-link]: https://github.com/prettier/prettier
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs-link]: http://makeapullrequest.com
[react-link]: https://github.com/facebook/react
[release-badge]: https://img.shields.io/github/release/luftywiranda13/solid-node-module.svg
[release-link]: https://github.com/luftywiranda13/solid-node-module/releases/latest
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg
[roadmap-link]: https://github.com/luftywiranda13/solid-node-module/blob/master/other/ROADMAP.md
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-link]: https://github.com/semantic-release/semantic-release
[sindresorhus-link]: https://github.com/sindresorhus
[travis-link]: https://travis-ci.org
[yarn-link]: https://yarnpkg.com
