'use strict';

import movie from './movie'

export default app => {
	// app.get('/', (req, res, next) => {
	// 	res.redirect('/');
	// });
	app.use('/movie', movie);
}
