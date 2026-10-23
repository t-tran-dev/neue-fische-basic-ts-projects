import type { Film, Playlist } from "./types.js";

export const formatFilm = (film: Film): string => {
  const { title, year, watched, rating } = film;
  const baseDescription = `${title}(${year}) | Status: ${watched ? "watched" : "not watched yet"}`;
  if (!rating) return baseDescription;
  const ratingDescription = ` | Rating: ${rating}/5`;
  return baseDescription + ratingDescription;
};

export const getUnwatched = (playlist: Playlist): Film[] =>
  playlist.films.filter((film) => film.watched === false);
