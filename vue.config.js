module.exports = {
	transpileDependencies: ['vuetify'],
	publicPath: proccess.env.NODE_ENV === 'production' ? '/movie-listing/' : '/'
};
