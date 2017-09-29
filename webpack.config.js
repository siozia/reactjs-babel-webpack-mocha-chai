var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    context:__dirname + '/src',
    entry:"./index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                loader:["style-loader","css-loader"]
            }

        ]        
    },
    plugins: [       
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject: 'body'
            }),
        ],    
};