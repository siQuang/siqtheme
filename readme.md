# siQtheme Reponsive Admin Template with jQuery and Bootstrap 4 - Dark and Light Mode

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/siQuang/siqtheme.svg)](https://github.com/siQuang/siqtheme/releases)
[![npm version](https://img.shields.io/npm/v/siqtheme/latest.svg)](https://www.npmjs.com/package/siqtheme)

As the world is going into lockdown because of the covid-19 pandemic, why not take this opportunity while staying at home to create something for the community and share it with the world!

siQtheme is a responsive admin template created with Bootstrap 4 and using Webpack with Laravel-Mix. Webpack is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included.

Author: Simon Nguyen (siQuang)
Website: https://siquang.com

**View demo here [https://siqtheme.siquang.com](https://siqtheme.siquang.com)**

!["siQtheme Dark"](https://siqtheme.3msquare.com/assets/img/siqtheme_dark.png "siQtheme Dark")

!["siQtheme Light"](https://siqtheme.3msquare.com/assets/img/siqtheme_light.png "siQtheme Light")

## Installation

There are a few ways to install **siQtheme** depends on your project. You'll need Node.js and NPM to pull in all the packages as the download only contains the source files.

#### Download from Github

- Download from [Github Releases](https://github.com/siQuang/siqtheme/releases).
- After download run the following command from project directory in console to pull in all dependencies.

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
## Using siQtheme with Laravel

Install the siQtheme package

``` bash
$ npm i siqtheme
```

Add to bootstrap.js file in resources directory

``` bash
require('siqtheme');
```

Import styles to app.scss

``` bash
@import '~siqtheme/src/assets/sass/siqtheme';
```

Create a new view file (i.e. test.blade.php) and copy the content from the sample.html:

```
node_modules/siqtheme/src/sample.html
```

Replace the stylesheet link and script in your new file with the correct link and script for your application.

``` bash
# replace this line to point to your style
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

# replace this line to point to your script
<script src="{{ asset('js/app.js') }}"></script>
```

Add a new route

``` bash
Route::get('/test', function() {
	return view('test');
});
```
And thats it!