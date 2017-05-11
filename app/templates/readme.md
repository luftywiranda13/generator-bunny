<p align="center">
  <img src="https://cdn.shopify.com/s/files/1/0185/5092/products/nature-0006_large.png" width="280" />
</p>

<p align="center">
  <strong>Jumpstart <a href="https://www.npmjs.com">node module</a>, like a bunny!</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/<%- moduleName %>">
    <img src="https://img.shields.io/npm/v/<%- moduleName %>.svg?style=flat-square" />
  </a>
  <a href="https://travis-ci.org/<%- githubUsername %>/<%- moduleName %>">
    <img src="https://img.shields.io/travis/<%- githubUsername %>/<%- moduleName %>/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/github/<%- githubUsername %>/<%- moduleName %>">
    <img src="https://img.shields.io/codecov/c/github/<%- githubUsername %>/<%- moduleName %>.svg?style=flat-square" />
  </a>
  <a href="https://david-dm.org/<%- githubUsername %>/<%- moduleName %>">
    <img src="https://david-dm.org/<%- githubUsername %>/<%- moduleName %>.svg?style=flat-square" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" />
  </a>
  <a href="https://github.com/<%- githubUsername %>/<%- moduleName %>/blob/master/license">
    <img src="https://img.shields.io/github/license/<%- githubUsername %>/<%- moduleName %>.svg?style=flat-square" />
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
  <a href="https://github.com/<%- githubUsername %>/<%- moduleName %>/blob/master/other/code_of_conduct.md">
    <img src="https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square" />
  </a>
  <a href="https://github.com/<%- githubUsername %>/<%- moduleName %>/blob/master/other/roadmap.md">
    <img src="https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square" />
  </a>
  <a href="https://github.com/<%- githubUsername %>/<%- moduleName %>/blob/master/other/examples.md">
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


## Getting started


### Installation

```sh
# with yarn:
yarn <% if (global) { %>global <% } %>add <%= moduleName %>

# with npm: 
npm install <% if (global) { %>-g<% } else { %>--save<% } %> <%= moduleName %>
```


## Usage


## Suggestions

Help things to get better, contributions of any kind are welcome!

I'm open to discuss any suggestions and contributions, but be aware this is a highly opinionated project. It means [<%= moduleName %>](https://github.com/<%= githubUsername %>/<%= moduleName %>) can't always fulfill your needs and I'm only interested to develop/work on **specific thing that later useful** for any other projects of mine.

Please check [roadmap][roadmap-link] to list or see something you can contribute on, then [make a pull request][prs-link] of it!<br />
Also see [`contributing.md`](./contributing.md) for more informations about how to contribute.


## Contributors

This project follows the [all-contributors][all-contributors-link] specification.<br />
Thanks goes to these people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


## Inspiration

Heavily inspired from [Sindre Sorhus][sindresorhus-link] & [Kent C. Dodds][kentcdodds-link].


## Useful links

- [How to contribute to an open-source project](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
- [Thoughts on small module](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)


## License

MIT &copy; [<%= name %>](<%= website %>)


[all-contributors-link]: https://github.com/kentcdodds/all-contributors
[angular-conventions-link]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit
[babel-link]: https://babeljs.io
[build-badge]: https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square
[build-link]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/other/code_of_conduct.md
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen-link]: http://commitizen.github.io/cz-cli
[coverage-badge]: https://img.shields.io/codecov/c/github/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square
[coverage-link]: https://codecov.io/github/<%= githubUsername %>/<%= moduleName %>
[eslint-link]: http://eslint.org/
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg?style=flat-square
[examples-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/other/examples.md
[flow-link]: https://flow.org
[<%= moduleName %>-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>
[jest-link]: https://facebook.github.io/jest
[kentcdodds-link]: https://github.com/kentcdodds
[license-badge]: https://img.shields.io/github/license/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square
[license-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/license
[npm-link]: https://www.npmjs.com/
[nps-link]: https://github.com/kentcdodds/nps
[open-source-link]: https://en.wikipedia.org/wiki/Open-source_software
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier-link]: https://github.com/prettier/prettier
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-link]: http://makeapullrequest.com
[release-badge]: https://img.shields.io/github/release/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square
[release-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/releases/latest
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/other/roadmap.md
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-link]: https://github.com/semantic-release/semantic-release
[semver-link]: http://semver.org/
[sindresorhus-link]: https://github.com/sindresorhus
[travis-link]: https://travis-ci.org
[yarn-link]: https://yarnpkg.com
[yeoman-link]: http://yeoman.io/
