## Next.js starter

__All you need to start coding isomorphic web app__

* [React](https://reactjs.org/docs/getting-started.html) - is a JavaScript library for building user interfaces.
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [Next.js](https://nextjs.org/) - The React Framework for server side rendering and more.
* [CSS Modules](https://github.com/css-modules/css-modules) - is a CSS file in which all class names and animation names are scoped locally by default.
* [i18next](https://www.i18next.com/) - is an internationalization-framework written in and for JavaScript. But it's much more than that.


Testing tools:
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX.
* [Jest](https://jestjs.io/) - is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Enzyme](https://airbnb.io/enzyme/) - is a JavaScript Testing utility for React that makes it easier to test your React Components' output.
* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework.

---

You need to install [yarn](https://yarnpkg.com/) (>=1.12.3) and [Node.js](https://nodejs.org/) (>=10.14.0).

* __yarn__ - install dependencies.
* __yarn dev__ - run app in development mode.
* __yarn build__ - build app.
* __yarn start__ - start app in production mode (need to build previously).
* __yarn lint__ - lint js and css files.
* __yarn test:jest__ - run unit tests.
* __yarn test:cypress__ - run integration and e2e tests.

#### Notes:
1. [./pages/_app.js](./pages/_app.js) - have fix to update styles on page changes in dev mode. Related to [this](https://github.com/zeit/next-plugins/issues/282) issue on github.
2. There is some issue with getting current language during server side rendering [https://github.com/isaachinman/next-i18next/issues/187](https://github.com/isaachinman/next-i18next/issues/187).
3. [next-i18next](https://github.com/isaachinman/next-i18next/issues/187) has no major version and currently in active development. So be careful updating it to another versions.