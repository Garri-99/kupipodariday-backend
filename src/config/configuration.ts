export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME || 'student',
    password: process.env.DATABASE_PASSWORD || 'student',
    name: process.env.DATABASE_NAME || 'kupipodariday',
  },
  jwt: {
    key: process.env.JWT_KEY || 'secret',
  },
  hash: {
    salt: parseInt(process.env.SALT, 10) || 10,
  },
});
