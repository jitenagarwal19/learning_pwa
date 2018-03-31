var path = require('path');
console.log('printing dirname' + __dirname);
module.exports = {
    entry: './src/src.js',
    output: {
        path: path.resolve(__dirname, './src/dist/'),
        filename: 'bundle.js'
    },
    watch:true,
    devServer: {
        contentBase: path.join(__dirname, "./src/"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }

            },
            {
                test: /\.scss/,
                loader:['style-loader', 'css-loader', 'sass-loader']

            }
        ]
    }
};