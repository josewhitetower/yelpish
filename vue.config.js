/* eslint-disable @typescript-eslint/no-var-requires */
const pjson = require('./package.json');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${pjson.name}/`
    : '/',
};
