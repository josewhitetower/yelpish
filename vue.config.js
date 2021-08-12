// https://stackoverflow.com/a/60574371
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },
};
