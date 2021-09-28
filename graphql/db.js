import fetch from "node-fetch"

const API_URL = "https://yts-proxy.vercel.app/";

export const getMovies = (limit, rating) =>
	fetch(`${API_URL}`)
		.then(res => res.json())
		.then(json => json.data.movies);
