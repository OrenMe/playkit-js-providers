const webpackConfig = require('../../webpack.config');

const entryName = 'playkit-provider-ott';
const libraryName = 'ott';
const dirPath = '/packages/ott';

module.exports = webpackConfig(entryName, libraryName, dirPath);
