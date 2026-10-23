import { somePlayList } from "./playListMock.js";
import { formatFilm, getUnwatched } from "./formatFilm.js";

const allFilms = somePlayList.films;
const unwatchedFilms = getUnwatched(somePlayList);

console.log("All Films");
allFilms.forEach((film) => {
  console.log(formatFilm(film));
});

console.log("\n");

console.log("Unwatched Films");
unwatchedFilms.forEach((film) => {
  console.log(formatFilm(film));
});
