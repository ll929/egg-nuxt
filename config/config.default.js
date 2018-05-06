const nuxt = require('./nuxt/config.default');

module.exports = appInfo => {
  const config = exports = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1525020914491_3564',

    // add your config here
    middleware: [ 'nuxt' ],
    nuxt: {
      ...nuxt(appInfo),
      ignore: '/api',
      enable: true,
    },
  };
  return config;
};
