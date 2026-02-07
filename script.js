'use strict';

const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів, який Ви подивились?', ''),
      b = prompt('Як Ви його оціните?', ''),
      c = prompt('Один з останніх фільмів, який Ви подивились?', ''),
      d = prompt('Як Ви його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);