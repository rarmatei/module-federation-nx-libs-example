const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './apps/shell/tsconfig.app.json',
      })
    ]
  },
    output: {
        publicPath: "http://localhost:5000/",
        uniqueName: "shell"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                'mfe1': "mfe1@http://localhost:3000/remoteEntry.js"
            },
            shared: ["@angular/core", "@angular/common", "@angular/router", '@mfe1/test']
        })
    ],
};
