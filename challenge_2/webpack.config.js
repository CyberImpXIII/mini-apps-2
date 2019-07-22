const path = require('path');

module.exports = {
    entry: './client/app.jsx',
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/nodemodules/,
                use:['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }
}