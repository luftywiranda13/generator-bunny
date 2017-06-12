<p align="center">
  <img src="https://cdn.shopify.com/s/files/1/0185/5092/products/nature-0006_large.png" width="200" alt="generator-bunny" />
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
  <br />
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

<br />


## Highlights


## Installation

```sh
# with yarn:
yarn <% if (global) { %>global <% } %>add <%= moduleName %>

# or with npm: 
npm install <% if (global) { %>-g<% } else { %>--save<% } %> <%= moduleName %>
```


## Usage

```js
import <%= camelModule %> from '<%= moduleName %>';

// do what you wanna do
console.log(<%= camelModule %>);
```

## Suggestions

Help things to get better, contributions of any kind are welcome!

Please check [`roadmap.md`][roadmap-link] to list or see something you can contribute on, then [make a pull request][prs-link] of it!<br />
Also see [`contributing.md`](./contributing.md) for more informations about how to contribute.


## Contributors

This project follows the [all-contributors][all-contributors-link] specification.<br />
Thanks goes to these people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub><%= name %></sub>](<%= website %>)<br />[💻](https://github.com/<%= githubUsername %>/<%= moduleName %>/commits?author=<%= githubUsername %> "Code") [📖](https://github.com/<%= githubUsername %>/<%= moduleName %>/commits?author=<%= githubUsername %> "Documentation") [💡](#example-<%= githubUsername %> "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->


## Inspiration

Heavily inspired from [Sindre Sorhus][sindresorhus-link] & [Kent C. Dodds][kentcdodds-link].


## Useful links

-   [How to contribute to an open-source project](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)
-   [Submitting a pull request (PR)](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-submitting-a-pull-request-pr)
-   [Thoughts on small module](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)


## License

MIT &copy; [<%= name %>](<%= website %>)


[all-contributors-link]: https://github.com/kentcdodds/all-contributors
[kentcdodds-link]: https://github.com/kentcdodds
[prs-link]: http://makeapullrequest.com
[sindresorhus-link]: https://github.com/sindresorhus
[roadmap-link]: https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/other/roadmap.md
