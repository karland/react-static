/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Files that are transformed and can use ES6/Flow/JSX.
const esNextPaths = ['src/**/*.js', 'examples/**/*.js'];

// Files that we distribute on npm that should be ES5-only.
// const es5Paths = ['packages/*/npm/**/*.js'];
const es5Paths = [''];

module.exports = {
  esNextPaths,
  es5Paths,
};
