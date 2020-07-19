const imageminMozjpeg = require('imagemin-mozjpeg');
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin')

module.exports = function override(config, env) {

  config = rewireImageminPlugin(config, env, {
    plugins: [
      imageminMozjpeg({
        quality: 40,
        progressive: true
      })
    ]
  });

  return config;
};
