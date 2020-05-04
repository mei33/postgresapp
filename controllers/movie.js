const db = require('../db')
const Movie = db.movies

const createMovie = (request, response) => {
  const { body } = request;

  if (!body) {
    return response.status(400).json({
      success: false,
      error: "No movie provided"
    });
  }

  const {name, time, rating, img = ''} = body

  const movie = {
    name, time, rating, img
  };

  if (!movie) {
    return response.status(400).json({ success: false, message: 'No data for movie' });
  }

  Movie.create(movie)
    .then(() => {
      return response.status(201).json({
        success: true,
        message: "Movie created"
      });
    })
    .catch(error => {
      return response.status(400).json({
        success: false,
        message: error.message
      });
    });
};

const updateMovie = (request, response) => {
  const { body } = request;

  if (!body) {
    return response.status(400).json({
      success: false,
      error: "provide movie to update"
    });
  }

  Movie.update(body, {where: { id: request.params.id }})
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 1) {
        return response.status(200).json({ success: true, message: "movie updated" })
      }

      return response.status(404).json({ success: false, message: "not updated, maybe not found" });
    })
    .catch(error => {
      return response.status(400).json({ success: false, message: error.message });
    });
}

const deleteMovie = async (request, response) => {
  Movie.destroy({ where: { id: request.params.id }})
    .then(rowsDestroyed => {
      if (rowsDestroyed >= 1) {
        return response.status(200).json({ success: true, message: "movie deleted" })
      }

      return response.status(404).json({ success: false, message: "not deleted, maybe not found" })
    })
    .catch(error => {
      return response.status(400).json({ error, message: error.message });
    })
}

const getMovieById = async (request, response) => {
  const id = request.params.id;

  await Movie.findByPk(id)
    .then(data => {
      if (!data) {
        return response
          .status(404)
          .json({ success: false, message: "movie not found" });
      }

      return response.status(200).json({ success: true, data })
    })
    .catch(error => {
      console.log(error);
      return response.status(400).json({ success: false, message: error.message });
    });
    // TODO: 404 on !length ? в двух проектах эта ошибка
}

const getMovies = async (request, response) => {
  await Movie.findAll()
    .then(data => {
      if (!data.length) {
        return response
          .status(404)
          .json({ success: false, error: "no movies lol" });
      }

      return response.status(200).json({ success: true, data });
    })
    .catch(error => {
      return response.status(400).json({ success: false, error: error.message });
    })
}

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getMovies
};
