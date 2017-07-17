<p align="center">
  <img src="https://cdn.shopify.com/s/files/1/0185/5092/products/nature-0006_large.png" width="184" alt="generator-bunny" />
</p>

<p align="center">
  <strong>
    Jumpstart <a href="https://nodejs.org/api/modules.html#modules_modules">node module</a>, like a bunny!
  </strong>
</p>

<p align="center">
  Scaffold <a href="https://www.npmjs.com/">node module</a> or <a href="https://en.wikipedia.org/wiki/Open-source_software">open-source</a> project without having to deal with complicated setup.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/generator-bunny">
    <img src="https://img.shields.io/npm/v/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://npm-stat.com/charts.html?package=generator-bunny&from=2016-04-01">
    <img src="https://img.shields.io/npm/dt/generator-bunny.svg?style=flat-square" />
  </a>
  <a href="https://travis-ci.org/luftywiranda13/generator-bunny">
    <img src="https://img.shields.io/travis/luftywiranda13/generator-bunny/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/github/luftywiranda13/generator-bunny">
    <img src="https://img.shields.io/codecov/c/github/luftywiranda13/generator-bunny.svg?style=flat-square" />
  </a>
  <br />
  <a href="http://commitizen.github.io/cz-cli">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/other/code-of-conduct.md">
    <img src="https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square" />
  </a>
  <a href="https://github.com/luftywiranda13/generator-bunny/blob/master/other/roadmap.md">
    <img src="https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square" />
  </a>
</p>

## Highlights

This generator includes built-in modern tools which have been widely used by the community:
-   [Automated GitHub release notes generator](/releases)
-   [Automated releasing with semantic-release][semantic-link]
-   [Automated testing & validation before any commits][husky-link]
-   [Automated source-code formatting with prettier][prettier-link]
-   [Babel transpiler for writing next generation JavaScript][babel-link]
-   [Eslint linting utility][eslint-link]
-   [Flow static typechecker][flow-link]
-   [GitHub templates (Issue & Pull Request, License, CoC, etc.)](https://github.com/blog/2111-issue-and-pull-request-templates)
-   [Jest testing framework][jest-link]
-   [Travis Continuous Integration config][travis-link]

![](screenshot.png)

## Getting started

### 1. Installation

```sh
npm install -g yo generator-bunny
```

### 2. Create new project

**Make a new directory:**

```sh
mkdir my-bunny
cd my-bunny
```

**Generate files:**

```sh
yo bunny
```

**Validate project:**

```sh
npm start validate
```

## Usage

### 1. First-timer

**Install and setup [semantic-release][semantic-link]:**

```sh
npm install -g semantic-release-cli
```

> **Note:** Make sure you‘ve set your repository up on GitHub before proceeding or `semantic-release` installation will throw errors!

**Then run:**

```sh
semantic-release-cli setup
```

**Select Travis CI, answer `no` to `overwrite`**

> There‘s already a general purpose [Travis CI][travis-link] configuration stored in [`.travis.yml`](./app/templates/_travis.yml). You can just leave it like that because it‘s already more than enough in most common situation.

**Publish manually:**

```sh
npm publish
```

### 2. Recommended workflow

**Make some changes. If you want to commit, run (instead of `git commit`):**

```sh
npm start commit
```

**Select the type of commit**

> This project follows the [AngularJS Commit Message Conventions][angular-conventions-link]. Following a standardized commit message format is important if you want to start a maintainable and scalable project. Also it is required to generate changelog and make automated releasing works.

**Push those changes to GitHub**

```sh
git push origin master
```

> **Note:** Don‘t add tag, publish, or bump your project version manually. Let `semantic-release` do those tasks for you. Your release version number is auto-formatted based on [SemVer specifications][semver-link].


### 3. Your own workflow

> You don‘t have to follow those recommended steps. Define your own workflow if you will but one of the consequence is you don‘t get the ability to publish/release your package to [npm][npm-link] automatically.

For example, you still can do it like this:

```sh
git add .
git commit -m "I want to do it my way cause this is my project and I‘m working for myself"
```

## Tips

> Some useful scripts are provided by [nps](https://github.com/kentcdodds/nps) to help you maintain your project.

To see the list, run:

```sh
npm start
```

## Contributors

Thanks goes to these people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub>Lufty Wiranda</sub>](http://instagram.com/luftywiranda13)<br />[💻](https://github.com/luftywiranda13/generator-bunny/commits?author=luftywiranda13 "Code") [📖](https://github.com/luftywiranda13/generator-bunny/commits?author=luftywiranda13 "Documentation") [🚇](#infra-luftywiranda13 "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Inspiration

- [Sindre Sorhus](https://github.com/sindresorhus) ⟷ [generator-nm](https://github.com/sindresorhus/generator-nm)
- [Kent C. Dodds](https://github.com/kentcdodds) ⟷ [generator-kcd-oss](https://github.com/kentcdodds/generator-kcd-oss)

## License
MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)

<!-- reference -->
[angular-conventions-link]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit
[babel-link]: https://babeljs.io
[eslint-link]: http://eslint.org/
[flow-link]: https://flow.org
[husky-link]: https://github.com/typicode/husky
[jest-link]: https://facebook.github.io/jest
[npm-link]: https://www.npmjs.com/
[prettier-link]: https://github.com/prettier/prettier
[roadmap-link]: https://github.com/luftywiranda13/generator-bunny/blob/master/other/roadmap.md
[semantic-link]: https://github.com/semantic-release/semantic-release
[semver-link]: http://semver.org/
[travis-link]: https://travis-ci.org
