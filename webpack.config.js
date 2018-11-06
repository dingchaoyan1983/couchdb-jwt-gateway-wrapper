var path = require('path');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    target: 'node',

    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    plugins: [
        new WebpackCleanupPlugin()
    ],
}