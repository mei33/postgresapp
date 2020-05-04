const express = require('express')
const MovieController = require('../controllers/movie')

const router = express.Router()

router.post('/movies/create', MovieController.createMovie)
router.put('/movies/:id', MovieController.updateMovie)
router.delete('/movies/:id', MovieController.deleteMovie)
router.get('/movies/:id', MovieController.getMovieById)
router.get('/movies', MovieController.getMovies)

module.exports = router
