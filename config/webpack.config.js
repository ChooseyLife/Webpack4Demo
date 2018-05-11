const path = require('path')

module.exports = {
    // 入口文件配置
    entry: {
        app: './src/main.js'
    },
    // 输出文件配置
    output: {
        path: path.resolve(__dirname, '../dist'),
        //打包的文件名称
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            "./" : "/"
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        host: 'localhost',
        hot: true
    }
}