const path = require('path');

module.exports = {
  'config': path.resolve('app', 'src',  'Database', 'Configs', 'config.js'),
  'migrations-path': path.resolve('app', 'src',  'Database', 'migrations'),
  'models-path': path.resolve('app', 'src',  'Database', 'models'),
  'seeders-path': path.resolve('app', 'src',  'Database', 'seeders'),
};
