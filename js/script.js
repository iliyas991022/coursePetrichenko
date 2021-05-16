'use strict';


let personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         alert("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         alert("Вы классический зриетль");
      } else if (personalMovieDB.count >= 30) {
         alert("Вы киноман");
      } else alert('Произошла ошибка');
   },
   rememberMyFilms: function() {
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
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   }, 
   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
         if (genre == '' || genre == null) {
            i--;
         } else {
         personalMovieDB.genres[i - 1] = genre;
         }
      }

      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i+1} - это ${item}`)
      })
   }
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();


