const quantumConfig = require('./quantum.config.js');

module.exports = {
  plugins: [
    require("postcss-import"),
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
    require("./src/plugins/quantum-css"),
  ],
};
