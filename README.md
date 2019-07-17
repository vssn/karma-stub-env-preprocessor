# karma-stub-env-preprocessor

If your tests are blocked because of `ReferenceError: process is not defined` this might help you.

There are edge cases where dependencies rely on `process.env` to be available within the karma testrunner.

This karma preprocessor stubs `process` and `process.env` in the test environment.

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
