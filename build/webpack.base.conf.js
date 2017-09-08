var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    devtool: 'eval',
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    output: {
        // 打包文件存放的绝对路径
        path: config.build.assetsRoot,
        // 打包后的文件名
        filename: '[name].js',
        // 网站运行时的访问路径
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        // resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.vue', '.json'],
        //查找module的话从这里开始查找
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // plugins: [
    //     new webpack.DllReferencePlugin({
    //       context: path.resolve(__dirname, '..'),
    //       manifest: require('./vendor-manifest.json')
    //     })
    // ],
    // 当我们想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中，这在实际开发中很有必要。
    // 此时我们就可以通过配置externals参数来解决这个问题
    // externals: {
    //     "jquery": "jQuery"
    // },
    resolve: {
        modules: [
            path.join(__dirname, "../src"),
            path.join(__dirname, "../node_modules")
        ],
        extensions: [".vue", ".css", ".scss", ".js", ".json"],
        alias: {
            Components: path.join(__dirname, "../src/components"),
            Views: path.join(__dirname, "../src/views"),
        }
    }
}

