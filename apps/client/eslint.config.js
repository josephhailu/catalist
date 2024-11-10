const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js').default;
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ...testingLibrary.configs['flat/react'],
  },
];
