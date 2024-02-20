import AppManager from "../App/AppManager.js";
import {
    state
} from "../utilities/config.js";
import {
    createMovieListDisplay,
    createMovieOverlay,
    createMovieDetails,
} from "./domManager.js";


const initApp = () => {
    // console.log('location', location.pathname);
    switch (state.currentPage) {
        case '/':          
        listPopularFilm();
        break;
        case '/movie-details.html':
            showFilm();
            break;
        case '/index.html':
            listPopularFilm();
            break;



    }
}
const listPopularFilm = async () => {
    // const url='https://api.themoviedb.org/3/movie/popular?api_key=e37e2f3f58bd0980eac83099577532c2';
    //instllät url=resourse from http 
    // const result = await new HttpClient().get('/movie/popular');
    const movies = await new AppManager().listMovies();
    const container = document.querySelector('#top-movies');

    movies.forEach(movie => {

        const card = createMovieListDisplay(movie);
        container.appendChild(card);

    })

}
const showFilm = async () => {
    // const movieId = 609681;
    // const url=`// https://api.themoviedb.org/3/ movie/609681 ?api_key=e37e2f3f58bd0980eac83099577532c2 `;
    // const result = await  new HttpClient().get('/movieId');
    //1.  
    const movieId = location.search.split('=')[1];
    const movie = await new AppManager().findMovie(movieId);
    //2. img back
    const backgroundImage = createMovieOverlay(movie.backgroundImage);
    const position = document.querySelector('#movie-details');
    position.appendChild(backgroundImage);
    //3.movie detals display
    const details = createMovieDetails(movie);  
     position.appendChild(details);
     
     
}

document.addEventListener('DOMContentLoaded', initApp);