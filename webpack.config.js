var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ production }) => {
  console.log("are we on production mode? : ", production + " ( 0--o-o--0 )");

  return {
    mode: production ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: true, // Enable to remove warnings about conflicting order
      }),
    ],

    //webpack dev server

    devServer: {
      hot: true,
      contentBase: path.join(__dirname, "bulid"),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js"],
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          // Creates `style` nodes from JS strings

          use: [
            {
              loader: "style-loader",
            },
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: "../",
                esModule: false,
                // hmr: process.env.NODE_ENV === "development", webpack 4 migration
              },
            },
            // Translates CSS into CommonJS
            {
              loader: "css-loader",
              options: {
                modules: { auto: true },
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "imagess",
              },
            },
          ],
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },

        {
          test: /\.(png|jpg|gif|ico|svg)$/i,
          include: path.join(__dirname, "images"),
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
  };
};
