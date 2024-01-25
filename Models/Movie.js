import {
  settings
} from "../utilities/config.js";


export default class Movie {
  //private 
  #id = 0;
  #title = '';
  #overview = '';
  #releaseDate = '';
  #poster = '';
  //for display-details
  #backgroundImage = '';
  #vote = 5;
  #genres = [];

  constructor(id, title, overview, releaseDate, poster,
    backgroundImage,
    vote,
    genres) {
    this.#id = id;
    this.#title = title;
    this.#overview = overview;
    this.#releaseDate = releaseDate;
    this.#poster = poster;
    this.#backgroundImage = backgroundImage;
    this.#vote = vote;
    this.#genres = genres;
  }
  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get overview() {
    return this.#overview;
  }
  get releaseDate() {
    return this.#releaseDate;
  }

  get poster() {
    return `${settings.IMAGE_URL}${this.#poster}`;
  } //vägen till bild

  get backgroundImage() {
    return `${settings.BACKDROP_IMAGE_URL}${this.#backgroundImage}`;
  }

  get vote() {
    //ska göra om värde 6.442 (from api) -> 6.5
    return this.#vote.toFixed(1) + ' / 10'; //+""-> gör string from int
  }

  get genres() {
    return this.#genres;
  }
}