'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
   }
}

start();


function detectPersonalLevel() {
   if (numberOfFilms < 10) {
      alert("Просмотрено довольно мало фильмов");
   } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
      alert("Вы классический зриетль");
   } else if (numberOfFilms >= 30) {
      alert("Вы киноман");
   } else alert('Произошла ошибка');
}

// detectPersonalLevel();

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};



function rememberMyFilms() {
   for (let i = 0; i < 2;i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '');
      const b = prompt('Насколько оцените?', '');
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

// rememberMyFilms();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
   }
}

writeYourGenres();
