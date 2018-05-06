require('babel-register');
const { Nuxt, Builder } = require('nuxt');
module.exports = app => {
// Instantiate nuxt.js
  const nuxt = new Nuxt(app.config.nuxt);
  if (app.config.env === 'local') {
    new Builder(nuxt).build().catch(error => {
      console.error(error);
      process.exit(1);
    });
  }

  app.beforeStart(async () => {
    app.nuxt = nuxt;
  });
};

