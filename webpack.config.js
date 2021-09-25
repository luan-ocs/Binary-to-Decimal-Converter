const webpack = require("webpack");
const mododev = process.env.NODE_ENV !== "production"
const uglifyjs = require("terser-webpack-plugin")
const cssmin = require("css-minimizer-webpack-plugin")
const miniCssPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: mododev ? "development" : "production",
    entry: "./src/index.js",
    devServer: {
        static: {
            directory: "./build"
        },
        port: 8080
    },
    output: {
        filename: "index.js",
        path: __dirname + "/build"
    },
    plugins: [new miniCssPlugin({
        filename: "style.css"
    })],
    module : {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [miniCssPlugin.loader, "css-loader"]
        }]
    },
    optimization: {
        minimizer: [
            new uglifyjs({
                parallel: true
            }),
            new cssmin({
                parallel: true
            })
        ]
    }
}
