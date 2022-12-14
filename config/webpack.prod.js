/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 3001;

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash].js',
    publicPath: `http://localhost:${PORT}/`,
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
    new webpack.EnvironmentPlugin({
      USERS_API: process.env.USERS_API || 'http://localhost:4000',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
