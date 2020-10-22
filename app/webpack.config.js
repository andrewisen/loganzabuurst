const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            // {
            //     test: /\.svg/,
            //     use: {
            //         loader: "svg-url-loader",
            //         options: {},
            //     },
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};
