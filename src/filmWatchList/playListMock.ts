import type { Playlist } from "./types.js";

export const somePlayList: Playlist = {
  name: "SomePlaylist",
  films: [
    {
      id: 1,
      title: "Shutter Island",
      year: 2010,
      watched: true,
      rating: 5,
    },
    {
      id: 2,
      title: "The Transformers: The Movie",
      year: 1986,
      watched: false,
    },
    {
      id: 3,
      title: "Transformers",
      year: 2007,
      watched: false,
    },
    {
      id: 4,
      title: "Transformers: Revenge of the Fallen",
      year: 2009,
      watched: false,
    },
    {
      id: 5,
      title: "Transformers: Dark of the Moon",
      year: 2011,
      watched: false,
    },
    {
      id: 6,
      title: "The Hobbit: An Unexpected Journey",
      year: 2012,
      watched: true,
      rating: 4,
    },
    {
      id: 7,
      title: "The Hobbit: The Desolation of Smaug",
      year: 2013,
      watched: true,
      rating: 5,
    },
  ],
};
