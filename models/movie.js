module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define('movie', {
    name: {
      type: Sequelize.STRING,
    },
    time: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.NUMBER,
    },
    img: {
      type: Sequelize.BLOB,
    }
  })

  return Movie;
}
