require('dotenv').config();

module.exports = {
  direction: 'up',
  migrationsTable: 'pgmigrations',
  dir: 'migrations',
  databaseUrl: process.env.DATABASE_URL,
  // databaseUrl: {
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASS,
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  //   database: process.env.DB_NAME,
  // },
};
