'use strict';

const numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 for (let i = 0; i < 2; i++) {
   const a = prompt('Один з останніх фільмів, який Ви подивились?', ''),
         b = prompt('Як Ви його оціните?', '')
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
             personalMovieDB.movies[a] = b;
             console.log('done');
         } else {
             console.log('error');
             i--;
         }
 }

if (personalMovieDB.count < 10) {
    console.log("Ви дивились замало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви хороший глядач");
} else if (personalMovieDB.count >= 30) {
    console.log("Та Ви кіноман");
} else {
    console.log("Сталась помилка");
}

console.log(personalMovieDB);