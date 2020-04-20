# siQtheme Admin Template with Webpack Mix and Bootstrap 4

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

``` bash
# install app's dependencies
$ npm install
```

## Usage

Just run the following cmd to generate a public directory with all the files.

``` bash
# generate a development public directory with hot reload at localhost:3000.
$ npm run dev

# build production with minification
$ npm run prod
```

## Structures

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
siqtheme/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   ├── sass/
│   │   ├── scripts/
│   │   ├── vendors/
│   ├── partials/
│   ├── index.ejs
│   └── ...
├── mix-manifest.json
├── package.json
├── pages.js
└── webpack.mix.js
```

## Install for Laravel

### Install Package

``` bash
# install siqtheme package
$ npm i siqtheme
```

### app.scss - add the following line

``` bash
# siQtheme SASS
@import '~siqtheme/assets/sass/siqtheme';
```

### app.js - add the following line

``` bash
# siQtheme
require('siqtheme');
```