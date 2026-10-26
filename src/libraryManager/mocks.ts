import type { BookPreview, Book } from "./types.js";

export const bookPreviewsMock: BookPreview[] = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
  },
];

export const booksMock: Book[] = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    isbn: "1-234-56789",
    isAvailable: true,
    createdAt: new Date("2026-10-01T10:00:00Z"),
    updatedAt: new Date("2026-10-01T10:00:00Z"),
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    isbn: "1-567-12345",
    isAvailable: false,
    createdAt: new Date("2026-10-02T10:00:00Z"),
    updatedAt: new Date("2026-10-05T14:30:00Z"),
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    isbn: "1-890-45678",
    isAvailable: true,
    createdAt: new Date("2026-10-03T10:00:00Z"),
    updatedAt: new Date("2026-10-06T09:15:00Z"),
  },
];
