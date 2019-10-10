'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	movie_id: Number,
	name: String,
	role: String,
	introduce: String,
	type: String,
	grade: Number,
})

movieSchema.index({id: 1});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie
