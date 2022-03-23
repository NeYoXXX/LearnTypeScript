const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CheckPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    // loader:'awesome-typescript-loader', // 也有 transpileOnly 属性
                    options:{
                        transpileOnly:true // transpileOnly = true只做语言转换，不做类型检查，以提高编译速度
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new ForkTsCheckerWebpackPlugin(),
        // new CheckPlugin()
    ]
}
/*
    transpileOnly = true虽然提高了速度，但是如果代码有类型错误，则会通过编译，会有不可预知的问题
    可以通过 fork-ts-checker-webpack-plugin 插件，来做类型检查的工作

    awesome-typescript-loader 与 ts-loader 的区别
    1.更适合与 Babel 集成，使用 Babel 的转义和缓存
    2.不需要安装额外的插件，就可以把类型检查放在独立进程中进行

    awesome-typescript-loader 类型检查还有缺陷，建议使用 ts-loader + fork-ts-checker-webpack-plugin
*/
