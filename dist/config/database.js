"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connector: 'bookshelf',
        connection: {
            host: env("DATABASE_HOST", "127.0.0.1"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi"),
            user: env("DATABASE_USERNAME", ""),
            password: env("DATABASE_PASSWORD", ""),
            schema: env('DATABASE_SCHEMA', 'public'),
            ssl: env('DATABASE_SSL', false),
            // ssl: {
            //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            // },
        },
        pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 30000,
            createTimeoutMillis: 30000,
            acquireTimeoutMillis: 30000
        },
        useNullAsDefault: true,
        debug: false,
    },
});
// KNEX CONFIGURATION TYPE
// Keep getting 'Error: Unknown dialect undefined _-_ at getDialectClass (/home/tolua/hearx/strapi-project/node_modules/@strapi/database/lib/dialects/index.js:12:13)'
// export default ({ env }): Knex.Config => ({
//   client: 'pg',
//   version: '7.2',
//   dialect: "postgres",
//   connection: {
//     // client: "postgres",
//     host: env("DATABASE_HOST", "127.0.0.1"),
//     port: env.int("DATABASE_PORT", 5432),
//     database: env("DATABASE_NAME", "strapi"),
//     user: env("DATABASE_USERNAME", ""),
//     password: env("DATABASE_PASSWORD", ""),
//     // schema: env('DATABASE_SCHEMA', 'public'), // Not required
//     ssl: {
//       rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//     },
//     pool: { min: 0, max: 7 },
//     debug: false,
//   },
//   useNullAsDefault: true,
// })
// Previous version
// export default ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       // host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "strapi"),
//       user: env("DATABASE_USERNAME", ""),
//       password: env("DATABASE_PASSWORD", ""),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     pool: { min: 0, max: 7 },
//     useNullAsDefault: true,
//     debug: false,
//   },
// });
// DELETE: EDITED
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'strapi'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });
// Original Code.
// export default ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
