const mix = require('laravel-mix');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require('./pages');
const vendors = require('./vendors');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */
const mixBuild = process.env.MIX_BUILD || 'mix';

if (mixBuild === 'dist') {
    mix.sass('src/assets/sass/siqtheme.scss', 'dist/css')
        .js('src/assets/scripts/siqtheme.js', 'dist/js')
        .setPublicPath('dist');
} else {
    let googleAnalytics = (mix.inProduction()) ? true : false;

    mix.sass('src/assets/sass/siqtheme.scss', 'assets/css/')
        .js('src/assets/scripts/siqtheme.js', 'assets/scripts/')
        .setPublicPath('public')
        .setResourceRoot('../../')
        .sourceMaps()
        .browserSync({
            proxy: 'siqtheme.test',
            files: ['public/**/*.html', 'public/assets/css/**/*.css', 'public/assets/scripts/**/*.js']
        })
        .copyDirectory('src/assets/img', 'public/assets/img')
        .webpackConfig({
            plugins: [
                ...pages.map(page => {
                    let sub2 = (page.submenu2 != 'undefined') ? page.submenu2 : '';

                    return new HtmlWebpackPlugin({
                        title: page.title,
                        template: '!!ejs-compiled-loader!'+page.template,
                        filename: page.filename,
                        topmenu: page.topmenu,
                        submenu: page.submenu,
                        submenu2: sub2,
                        analytics: googleAnalytics,
                        inject: false
                    })
                })
            ]
        });

    // Fonts path
    mix.config.fileLoaderDirs.fonts = 'assets/fonts';

    /*
     |--------------------------------------------------------------------------
     | Pages Assets
     |--------------------------------------------------------------------------
     */
    // Dashboard
    mix.styles([
        'node_modules/apexcharts/dist/apexcharts.css',
        ], 'public/assets/css/pages/dashboard1.css')
        .scripts([
            'node_modules/apexcharts/dist/apexcharts.js',
            'src/assets/scripts/pages/dashboard1.js'
        ], 'public/assets/scripts/pages/dashboard1.js');

    // Date & Time Picker
    mix.styles([
            'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
            'node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css'
        ], 'public/assets/css/pages/cp_datetime.css')
        .scripts([
            'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
            'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
            'src/assets/scripts/pages/cp_datetime.js'
        ], 'public/assets/scripts/pages/cp_datetime.js');

    // Bootstrap Cards
    mix.js('src/assets/scripts/pages/ui_card.js', 'assets/scripts/pages');

    // Bootstrap Modals
    mix.js('src/assets/scripts/pages/ui_modal.js', 'assets/scripts/pages');

    // Toastr
    mix.js('src/assets/scripts/pages/ui_toastr.js', 'assets/scripts/pages');

    // Datatables
    mix.js('src/assets/scripts/pages/tb_datatables.js', 'assets/scripts/pages');

    // Form Control 
    mix.js('src/assets/scripts/pages/fm_control.js', 'assets/scripts/pages');

    // CKEditor
    mix.scripts([
            'node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js',
            'src/assets/scripts/pages/fm_ckeditor_classic.js'
        ], 'public/assets/scripts/pages/fm_ckeditor_classic.js')
        .scripts([
            'node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js',
            'src/assets/scripts/pages/fm_ckeditor_balloon.js'
        ], 'public/assets/scripts/pages/fm_ckeditor_balloon.js')
        .scripts([
            'node_modules/@ckeditor/ckeditor5-build-balloon-block/build/ckeditor.js',
            'src/assets/scripts/pages/fm_ckeditor_block.js'
        ], 'public/assets/scripts/pages/fm_ckeditor_block.js')
        .scripts([
            'node_modules/@ckeditor/ckeditor5-build-inline/build/ckeditor.js',
            'src/assets/scripts/pages/fm_ckeditor_inline.js'
        ], 'public/assets/scripts/pages/fm_ckeditor_inline.js')
        .scripts([
            'node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js',
            'src/assets/scripts/pages/fm_ckeditor_document.js'
        ], 'public/assets/scripts/pages/fm_ckeditor_document.js');

    // Apex Charts
    mix.js('src/assets/scripts/pages/ch_apexcharts.js', 'assets/scripts/pages');

    // Login page
    mix.js('src/assets/scripts/pages/pg_login.js', 'assets/scripts/pages');

    /*
     |--------------------------------------------------------------------------
     | Vendors Assets
     |--------------------------------------------------------------------------
     */
    vendors.forEach(vendor => {
        let ext = path.extname(vendor.src.toLowerCase());

        if (ext === '.css') {
            mix.styles(vendor.src, vendor.out);
        }
        
        if (ext === '.js') {
            mix.scripts(vendor.src, vendor.out);
        }
    });

}

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
