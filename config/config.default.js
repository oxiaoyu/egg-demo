/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572438337684_3329';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*', 
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
config.security = {
  csrf: {
      enable: false,
  },
};
 config.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
  },
};
  return {
    ...config,
    ...userConfig,
  };
};
