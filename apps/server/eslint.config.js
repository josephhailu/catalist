const baseConfig = require('../../eslint.config.js');
const drizzleEslint = require('eslint-plugin-drizzle');

module.exports = [
  ...baseConfig,
  {
    ...drizzleEslint.configs['all'],
  },
];
