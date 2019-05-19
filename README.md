# Form Builder
A web app to build forms using a simple schema, built with React.

## Structure
The `components` folder hosts the individual components. `App` is the top-level component; `Form` represents the form, and `FormElement` represents one form group.

The `server` folder hosts the server logic. This uses middleware to gzip compress the response, and transpile JSX to browser-friendly JS using the Webpack config. In the Webpack config, `babel-loader` is called, which gets its config from `.babelrc`. We use the `env` and `react` presets, and the `transform-runtime` plugin to accommodate async functions (see [this issue](https://github.com/OctoLinker/OctoLinker/pull/306#discussion_r104509226)).

The `src` folder hosts the client-facing HTML and CSS. The `index.js` file is only responsible for injecting the top-level component to the page.

EditorConfig maintains a standard editor configuration.