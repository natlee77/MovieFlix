import HttpClient from "../lib/http.js";
import Movie from "../Models/Movie.js";

export default class AppManager {
    async listMovies() {

        try {
            const http = new HttpClient();
            const data = await http.get('movie/popular');
            // return data.results;    
            //loopa genom result och skapa new for varje film
            const movies = data.results.map(movie => {
                return new Movie(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.release_date, //som i JSON
                    movie.poster_path //populera object {}skapad med get() class Movie
                );


            });

            return movies;
        } catch (error) {
            throw new Error(`problem to get data ${response.status} ${response.statusText}`);
        }
    }
    async findMovie(movieId) {

        // const url=`https://api.themoviedb.org/3/movie/${movieId}?api_key=e37e2f3f58bd0980eac83099577532c2`;
        try {
            const http = new HttpClient();
            const res = await http.get(`movie/${ movieId }`);

            const movie = new Movie(
                res.id,
                res.title,
                res.overview,
                res.release_date, //som i JSON
                res.poster_path,               
                res.backdrop_path,
                res.vote_average,
                res.genres
            );
console.log('',movie);

            return movie;
        } catch (error) {
            throw new Error(`problem to get data ${response.status} ${response.statusText}`);
        }

    }
}