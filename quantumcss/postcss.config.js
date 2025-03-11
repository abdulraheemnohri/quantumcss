const quantumConfig = require('./quantum.config.js');

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
    require("./plugins/quantum-css")({
      config: quantumConfig
    }),
    require("@fullhuman/postcss-purgecss")({
      content: quantumConfig.purge.content,
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body']
    }),
  ],
};