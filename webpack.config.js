var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ production }) => {
  console.log("are we on production mode? : ", production ? production : "Nope!" + " ( 0--o-o--0 )");
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
      // new MiniCssExtractPlugin({
      //   // Options similar to the same options in webpackOptions.output
      //   // all options are optional
      //   filename: "[name].css",
      //   chunkFilename: "[id].css",
      //   ignoreOrder: true, // Enable to remove warnings about conflicting order
      // }),
    ],

    //webpack dev server

    devServer: {
      hot: true,
      static: path.join(__dirname, "dist"),
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
      // Add '.ts' and '.tsx' '.js' as resolvable extensions.
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
            "style-loader",
            //   {
            //    loader: 'typings-for-css-modules-loader',
            //    options: {
            //      modules: {auto:true},
            //      namedExport: true,
            //      camelCase:true,
            //   }
            // },
            // {
            //   loader: MiniCssExtractPlugin.loader,
            //   options: {
            //     // you can specify a publicPath here
            //     // by default it uses publicPath in webpackOptions.output
            //     publicPath: "../",
            //     //esModule: false,
            //     // hmr: process.env.NODE_ENV === "development", webpack 4 migration
            //   },
            // },
            // Translates CSS into CommonJS
            // "css-loader"
            {
              loader: "css-loader",
              options: {
                // importLoaders: 2,
                //[path]__[local]
                modules: {
                  mode: "local",
                  auto: true,
                  exportGlobals: true,
                  localIdentName: production ? "[hash:base64:5]" : "[path][name]__[local]",
                  localIdentContext: path.resolve(__dirname, "src"),
                  localIdentHashSalt: "my-custom-hash",
                  namedExport: false,
                  exportLocalsConvention: "asIs",
                  exportOnlyLocals: false,
                },
              }
            }
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          loader: "file-loader",
          options: {
            outputPath: "assets",
            publicPath: '/assets',
          },
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
          test: /\.(png|jpe?g|gif|ico|svg)$/i,
          loader: "url-loader",
          include: path.join(__dirname, "assets"),
          //webpack v4 syntax for url loader, use type:"asset" for webpack v5
          //visit https://webpack.js.org/loaders/css-loader/#pure-css-css-modules-and-postcss for more details
        },
      ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
  };
};
