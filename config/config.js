require('dotenv').config(); // Load .env variables (Optional, useful for local development)

module.exports = {
  development: {
    username: process.env.DB_USER || "default_user",
    password: process.env.DB_PASS || "default_pass",
    database: process.env.DB_NAME || "default_db",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    port:process.env.DB_PORT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port:process.env.DB_PORT

  }
};
