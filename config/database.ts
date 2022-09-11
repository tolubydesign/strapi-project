import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: ‘postgres’,
//     connection: {
//       host: env(‘DATABASE_HOST’, ‘127.0.0.1’),
//       port: env.int(‘DATABASE_PORT’, 5432),
//       database: env(‘DATABASE_NAME’, ‘strapi’),
//       user: env(‘DATABASE_USERNAME’, ‘strapi’),
//       password: env(‘DATABASE_PASSWORD’, ‘strapi’),
//       schema: env(‘DATABASE_SCHEMA’, ‘public’), // Not required
//       ssl: env(‘DATABASE_SSL’, false)
//     },
//     acquireConnectionTimeout: 1000000,
//     pool: {
//       min: 0,
//       max: 1,
//       acquireTimeoutMillis: 300000,
//       createTimeoutMillis: 300000,
//       destroyTimeoutMillis: 300000,
//       idleTimeoutMillis: 30000,
//       reapIntervalMillis: 1000,
//       createRetryIntervalMillis: 2000
//     },
//     debug: false,
//   },
// });