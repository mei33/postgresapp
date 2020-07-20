const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
})

const db = {
  Sequelize,
  sequelize,
  movies: require('../models/movie.js')(sequelize, Sequelize)
}

module.exports = db;
