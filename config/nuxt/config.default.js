/**
 * Created by liulei on 2018/5/5
 */
const path = require('path');
module.exports = appInfo => {
  return {
    /*
  ** Headers of the page
  */
    head: {
      title: 'nuxt-demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** Run ESLint on save
      */
      extend(config, { isDev, isClient }) {
        /*        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/,
          });
        }*/
        // 为 客户端打包 进行扩展配置
        if (isDev && isClient) {
          config.devtool = 'eval-source-map';
        }
      },
    },
    dev: (appInfo.env === 'local'),
    rootDir: path.join(appInfo.baseDir),
    srcDir: path.join(appInfo.baseDir, './app/nuxt'),
  };
};
