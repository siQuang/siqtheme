# siQtheme Reponsive Admin Template with jQuery and Bootstrap 4

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/siqtheme/latest.svg)](https://www.npmjs.com/package/siqtheme)

siQtheme is a responsive admin template build with Webpack Mix (Laravel-Mix). Webpack is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included.

Check out the demo at [https://siqtheme.3msquare.com](https://siqtheme.3msquare.com)

## Installation

There are a few ways to install **siQtheme** depends on your project. You will need to have Node.js and NPM, click this link to [Downloading and installing Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

#### Download from Github

- Download from [Github](https://github.com/siQuang/siqtheme).
- Execute the following command from project directory.

``` bash
# install app's dependencies
$ npm install
```

#### GIT Clone

``` bash
git clone https://github.com/siQuang/siqtheme.git
```

#### NPM

``` bash
# install package
$ npm i siqtheme
```

## Usage

Just run the following cmd to generate a public directory with all the files.

``` bash
# compile as development
$ npm run dev

# build production with minification
$ npm run prod

#---------------------------------------
# To use browser sync, make sure to change
# the proxy to your local environment
# i.e. localhost
#---------------------------------------
$ npm run watch
```

## Structures

The download contains the source files and will need to be compile for development or production.

```
siqtheme/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   ├── sass/
│   │   ├── scripts/
│   ├── partials/
│   ├── index.ejs
│   └── ...
├── mix-manifest.json
├── package.json
├── pages.js
└── webpack.mix.js
```
