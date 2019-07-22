const path = require ('path');

module.exports = {
    entry: './client/app.jsx',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'bundle.js'
    }
}