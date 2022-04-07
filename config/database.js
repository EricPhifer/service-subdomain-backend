const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
