var express = require('express');
import movie from "../controller/movie/movie";
const router = express.Router();

router.get('/getMovieTop',movie.getMovieTop);
router.post('/addMovie',movie.addMovie);
router.get('/getAllMovie',movie.getAllMovie);

export default router
