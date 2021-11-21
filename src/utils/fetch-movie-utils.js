const apiPrefix = `//www.omdbapi.com/?apikey=8bd0a139`;

export const fetchSearchResults = async (searchValue, page = 1) => {
	try {
		const response = await fetch(
			`${apiPrefix}&y=2020&s=${searchValue}&page=${page}`
		);

		return await response.json();
	} catch (error) {
		return Promise.reject(error);
	}
};

export const fetchMovieDetails = async imdbID => {
	try {
		const response = await fetch(`${apiPrefix}&i=${imdbID}`);

		return await response.json();
	} catch (error) {
		return Promise.reject(error);
	}
};
