"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
    }
}
    
    start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
        const a = prompt('Який останній фільм ви дивились?', '').trim(),
            b = prompt('Як ви його оціните', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
          
    }
}

rememberMyFilms();

function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
        console.log('Ви подивились замало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log('Ви хороший глядач');
    } else if (personalMovieDB.count >=30) {
        console.log('Ви кіноман');
    } else {
        console.log('Відбулась помилка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

showMyDB(personalMovieDB.privat);

function writeYuorGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улуюлений жанр під номером $(i)`);;
    }
}

writeYuorGenres();