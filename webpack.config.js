//entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
        test:/\.s?css$/,
        use:[
            'style-loader', //this puts our css into styling tags
            'css-loader',
            'sass-loader' //this compiles the scss into css
        ] //use is used to pass the multiple loader at a time where as loader passes a single loader

    }]
    },
    devtool:'eval-cheap-module-source-map', //this is command points to react code and where specific error has occured rather then pointing to the babble code.

    //the following creates the bundle file from memory and not creating the physical copy which is saving the app time, in order to generate the bundle file we just need to run yarn run build command in the console
    devServer: {
        static: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};

//loader
//we are installing babel-core wihch is similar to babel-cli
// babel-cli allows you to run the bable from command line and babel-core allows you to run the babel from the tools likewebpack
//babel-loader, it is a webpack plugin, it allows us to teach webpack how to run the babel when webpack sees the certain files.