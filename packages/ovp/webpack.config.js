const webpackConfig = require('../../webpack.config');

const entryName = 'playkit-provider-ovp';
const libraryName = 'ovp';
const dirPath = '/packages/ovp';

module.exports = webpackConfig(entryName, libraryName, dirPath);
