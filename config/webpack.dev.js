/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 3001;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    open: true,
    port: PORT,
    historyApiFallback: {
      index: 'index.html',
    },
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'users',
      filename: 'usersRemoteEntry.js',
      exposes: {
        './UsersApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
