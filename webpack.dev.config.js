const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'./release/bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    devServer:{
        // 服务器的根目录
        contentBase:path.join(__dirname,'./release'),
        open:true, // 自动打开浏览器
        port:9000,
        proxy:{
            '/api/*':{
                target:'http://localhost:8880'
            }
        }
    }
}