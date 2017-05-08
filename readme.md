<p align="center">
  <img src="https://cdn.shopify.com/s/files/1/0185/5092/products/nature-0006_large.png" width="320" />
</p>

<p align="center">
  <strong>Jumpstart <a href="https://www.npmjs.com">node module</a>, like a bunny!</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/generator-bunny">
    <img src="https://img.shields.io/npm/v/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://travis-ci.org/luftywiranda13/generator-bunny">
    <img src="https://img.shields.io/travis/luftywiranda13/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/github/luftywiranda13/generator-bunny">
    <img src="https://img.shields.io/codecov/c/github/luftywiranda13/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://david-dm.org/luftywiranda13/generator-bunny">
    <img src="https://david-dm.org/luftywiranda13/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/license">
    <img src="https://img.shields.io/github/license/luftywiranda13/generator-bunny.svg?style=flat-square" />
  </a>
</p>
<p align="center">
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" />
  </a>
  <a href="http://commitizen.github.io/cz-cli">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/other/code_of_conduct.md">
    <img src="https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/other/roadmap.md">
    <img src="https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/other/examples.md">
    <img src="https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square" />
  </a>
</p>

<p align="center">
  Don't let yourself for always having to setup any <a href="https://www.npmjs.com/">node module</a> or <a href="https://en.wikipedia.org/wiki/Open-source_software">open-source</a> projects from scratch.<br />
  Spend your time more on writing codes than setting them up.
</p>

<p align="center"><strong>Set it once, then forget it!</strong></p>

---

## Highlights
This generator includes built-in modern tools which are widely-used in the community:
- Automated [GitHub release](/releases) notes generator
- Automated releasing with [semantic-release][semantic-link]
- Automated testing & validation before any commits
- Automated source-code formatting with [prettier][prettier-link]
- [Babel][babel-link] transpiler for writing next generation JavaScript
- [Eslint][eslint-link] linting utility
- [Flow][flow-link] static typechecker
- [Jest][jest-link] test runner
- [React][react-link] ready
- [Travis Continuous Integration][travis-link]
- More… You need me to list them all here? 🐰


## Getting started

### Installation

Install [Yeoman][yeoman-link] and [generator-bunny][generator-bunny-link] globally using [npm][npm-link] or [yarn][yarn-link]. Yarn currently provides significant speed improvements over npm during the installation process. Consider using yarn if the installation is too slow for your needs.

With yarn:
```sh
yarn global add yo
yarn global add generator-bunny
```

Or with npm:
```sh
npm i -g yo
npm i -g generator-bunny
```


### Create new project

Make a directory to hold your project:
```sh
mkdir my-bunny
cd my-bunny
```

Generate files:
```sh
yo bunny
```

Follow the instruction from the command-line, Then validate your project by running:
```sh
yarn start validate
```

Or with npm:
```sh
npm start validate
```

If you got no errors then you're ready to go!<br />


## Usage

### First-timer
Install and setup [semantic-release][semantic-link]:

```sh
# with npm:
npm i -g semantic-release-cli

# or with yarn :
yarn global add semantic-release-cli 

# then run 
semantic-release-cli setup
```

When you're asked about Continuous Integration, choose Travis CI (or Travis CI Pro, if you have it). Don't forget to choose `no` to `overwrite`.

Then, publish manually for the **first time only**:<br />
```sh
npm publish
```


### Recommended workflow

Follow these steps to maintain better project and have the ability to release it automatically:
1. Make changes
2. Commit those changes by running: 
```sh
yarn start commit 

# or
npm start commit
```

3. Select the type of your commit.<br />This project follows the [AngularJS Commit Message Conventions][angular-conventions-link]. Following the conventions is important if you want to start a maintainable and scalable project. Also it is **required to make automated releasing works**.
4. Push those changes to your remote repository.<br />**Notice:** don't add tag or bump your project version manually. [Semantic-release][semantic-link] will do those stuffs for you.
5. Sit back and relax 💅<br />GitHub release notes, publishing to npm, bump project version, and many more complicated things are already handled by semantic-release. Your release version number is formatted based on [SemVer][semver-link].


### Your own workflow

You don't need to follow those recommended steps. Define your own workflow if you will. But one of the consequence is you don't get the ability to publish/release your package to npm automatically.

For example, you still can do it like this:
```sh
git add .
git commit -m "I want to do it my way cause this is my project and I'm working for myself"
```


## Tips

This generator ships with some useful scripts to help you. To see the list, run:
```sh
yarn start
```

Or with npm:
```sh
npm start
```

The scripts are provided by [nps][nps-link].


## Suggestions
Help things to get better, contributions of any kind are welcome!

I'm open to discuss any suggestions and contributions, but be aware this is a highly opinionated project. It means [generator-bunny](https://github.com/luftywiranda13/generator-bunny) can't always fulfill your needs and I'm only interested to develop/work on **specific thing that later useful** for any other projects of mine.

Please check [roadmap][roadmap-link] to list or see something you can contribute on, then [make a pull request][prs-link] of it!<br />
Also see [contributing.md](./contributing.md) for more informations about how to contribute.


## Contributors
This project follows the [all-contributors][all-contributors-link] specification.<br />
Thanks goes to these people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>Lufty Wiranda</sub>](https://www.instagram.com/luftywiranda13)<br />[💻](https://github.com/luftywiranda13/generator-bunny/commits?author=luftywiranda13 "Code") [📖](https://github.com/luftywiranda13/generator-bunny/commits?author=luftywiranda13 "Documentation") [💡](#example-luftywiranda13 "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->


## Inspiration
Heavily inspired from [Sindre Sorhus][sindresorhus-link] & [Kent C. Dodds][kentcdodds-link].


## Useful links

- [How to contribute to an open-source project](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
- [Thoughts on small module](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)


## License
MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13).


[all-contributors-link]: https://github.com/kentcdodds/all-contributors
[angular-conventions-link]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit
[babel-link]: https://babeljs.io
[build-badge]: https://img.shields.io/travis/luftywiranda13/generator-bunny.svg?style=flat-square
[build-link]: https://travis-ci.org/luftywiranda13/generator-bunny
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-link]: https://github.com/luftywiranda13/generator-bunny/blob/master/other/code_of_conduct.md
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen-link]: http://commitizen.github.io/cz-cli
[coverage-badge]: https://img.shields.io/codecov/c/github/luftywiranda13/generator-bunny.svg?style=flat-square
[coverage-link]: https://codecov.io/github/luftywiranda13/generator-bunny
[eslint-link]: http://eslint.org/
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square
[examples-link]: https://github.com/luftywiranda13/generator-bunny/blob/master/other/examples.md
[flow-link]: https://flow.org
[generator-bunny-link]: https://github.com/luftywiranda13/generator-bunny
[jest-link]: https://facebook.github.io/jest
[kentcdodds-link]: https://github.com/kentcdodds
[license-badge]: https://img.shields.io/github/license/luftywiranda13/generator-bunny.svg?style=flat-square
[license-link]: https://github.com/luftywiranda13/generator-bunny/blob/master/license
[npm-link]: https://www.npmjs.com/
[nps-link]: https://github.com/kentcdodds/nps
[open-source-link]: https://en.wikipedia.org/wiki/Open-source_software
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier-link]: https://github.com/prettier/prettier
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-link]: http://makeapullrequest.com
[react-link]: https://github.com/facebook/react
[release-badge]: https://img.shields.io/github/release/luftywiranda13/generator-bunny.svg?style=flat-square
[release-link]: https://github.com/luftywiranda13/generator-bunny/releases/latest
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap-link]: https://github.com/luftywiranda13/generator-bunny/blob/master/other/roadmap.md
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-link]: https://github.com/semantic-release/semantic-release
[semver-link]: http://semver.org/
[sindresorhus-link]: https://github.com/sindresorhus
[travis-link]: https://travis-ci.org
[yarn-link]: https://yarnpkg.com
[yeoman-link]: http://yeoman.io/
