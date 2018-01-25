const path = require('path');
const plugin_uglifyjs = require('uglifyjs-webpack-plugin');
const plugin_extractcss = require("extract-text-webpack-plugin");
const extractCSS = new plugin_extractcss('../css/[name]-test.css');
const dev_environment = process.env.NODE_ENV === 'development';
const file = {
    entry: './assets/js/app.js',
    output: 'bundle.js',
    publicPath: './assets/',
}

let config = {
    watch: true,
    entry: file.entry,
    output: {
        path: path.resolve('./assets/js/'),
        filename: file.output,
        publicPath: file.publicPath
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }
                })
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        hotReload: true

                    }
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '../img/',
                        outputPath:'../img/',
                        name: '[name].[ext]'
                    }
                }, {
                    loader: 'img-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 80
                        }
                    }
                }]
            }
        ]
    },
    plugins: [extractCSS]
}

/*IF PROD*/
if (!dev_environment) {
    config.watch = false;
    config.plugins.push(new plugin_uglifyjs({
        sourceMap: true
    }));
    config.devtool = 'source-map';
}
/*EXPORT*/
module.exports = config