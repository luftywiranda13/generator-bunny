# <%= moduleName %>

> <%= description %>

[![npm](https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square)](https://www.npmjs.com/package/<%= moduleName %>)
[![npm](https://img.shields.io/npm/dt/<%= moduleName %>.svg?style=flat-square)](https://npm-stat.com/charts.html?package=<%= moduleName %>&from=2016-04-01)
[![Travis branch](https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>/master.svg?style=flat-square)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)
[![Codecov branch](https://img.shields.io/codecov/c/github/<%= githubUsername %>/<%= moduleName %>/master.svg?style=flat-square)](https://codecov.io/github/<%= githubUsername %>/<%= moduleName %>)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./other/code_of_conduct.md)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](./other/roadmap.md)

## Highlights

// TODO

## Installation

```sh 
npm install <% if (global) { %>-g<% } else { %>--save<% } %> <%= moduleName %>
```

## Usage

```js
import <%= camelModule %> from '<%= moduleName %>';

<%= camelModule %>('🐰');
//=> '👉 🐰 👈'
```

## FAQ

### Why should I use `<%= moduleName %>`?

// TODO

## Contributors

Thanks goes to these people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/22868432?v=3" width="100px;"/><br /><sub><%= name %></sub>](https://github.com/<%= githubUsername %>)<br />[💻](https://github.com/<%= githubUsername %>/<%= moduleName %>/commits?author=<%= githubUsername %> "Code") [📖](https://github.com/<%= githubUsername %>/<%= moduleName %>/commits?author=<%= githubUsername %> "Documentation") [🚇](#infra-luftywiranda13 "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Related

// TODO

## License

MIT &copy; [<%= name %>](<%= website %>)
