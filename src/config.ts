require("dotenv").config();

const configs = {
  development: {
    SERVER_URI: process.env.DATABASEURI,
  },
  production: {
    SERVER_URI: process.env.ATLASURI,
  },
};

let server = configs[process.env.NODE_ENV as "development" | "production"];

export default server;
