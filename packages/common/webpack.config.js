const webpackConfig = require('../../webpack.config');

const entryName = 'playkit-provider-common';
const libraryName = 'common';
const dirPath = '/packages/common';

module.exports = webpackConfig(entryName, libraryName, dirPath);
