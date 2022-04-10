const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        style: './styles/index.scss',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '_.js',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                // fallback to style-loader in development
                "production" !== "production"
                  ? "style-loader" // Creates `style` nodes from JS strings
                  : MiniCssExtractPlugin.loader, // JS strings to css
                "css-loader", // Translates CSS into CommonJS
                "sass-loader" // Compiles Sass to CSS
              ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "./[name].css",
          chunkFilename: "./[id].css",
        }),
      ],
}