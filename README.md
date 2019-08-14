# karma-stub-env-preprocessor

If your tests are blocked because of `ReferenceError: process is not defined` this might help you.

There are edge cases where dependencies rely on `process.env` to be available within the karma testrunner.

This karma preprocessor stubs `process` and `process.env` in the test environment.

### Possible alternatives to this package

> If you are using a bundler like webpack in your karma setup, 
> you should rely on adding environment variables with the bundler instead.
> E.g. webpack https://webpack.js.org/guides/environment-variables/
> Also consider adding your variables following the setup on [dotenv](https://github.com/motdotla/dotenv) for more sophisticated needs than stubbing the `process.env` 

> **Also check if the dependency which relies on `process.env` 
> did already provide a solution for it.** As a popular example the Redux 
> package relies on a check for `process.env === 'production'` But
> from redux@4.0.4 onwards you can modify your import statement to not needing the stub:

`- import {createStore, ...} from 'redux'` 

`+ import {createStore, ...} from 'redux/es/redux.mjs'`

## Installation

Add the dependency:

```
npm i karma-stub-env-preprocessor
```

Add it to `plugins` and `preprocessors` in your `karma.conf.js` config object:

```
  plugins: [
    'karma-stub-env-preprocessor'
  ],
  preprocessors: {
    '**/*.js': ['stub-process-env']
  },
```
