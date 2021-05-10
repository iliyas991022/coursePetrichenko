'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

if (numberOfFilms < 10) {
   alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
   alert("Вы классический зриетль");
} else if (numberOfFilms >= 30) {
   alert("Вы киноман");
} else alert('Произошла ошибка');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('Насколько оцените?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('Насколько оцените?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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

console.log(personalMovieDB);   

