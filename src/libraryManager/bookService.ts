import { randomUUID } from "node:crypto";
import type {
  ApiResponse,
  Book,
  BookCreatePayload,
  BookPreview,
  BookUpdatePayload,
  EntityId,
  IsbnParts,
} from "./types.js";
import { bookPreviewsMock, booksMock } from "./mocks.js";

const fetchBooks = async (): Promise<ApiResponse<BookPreview[]>> => {
  return {
    status: 200,
    message: "Books fetched successfully",
    data: bookPreviewsMock,
  };
};

const fetchBook = async (id: EntityId): Promise<ApiResponse<Book>> => {
  const book = booksMock.find((book) => book.id === id);

  if (!book) {
    throw new Error(`Book with ID ${id} not found`);
  }

  return {
    status: 200,
    message: "Book fetched successfully",
    data: book,
  };
};

const createBook = async (
  payload: BookCreatePayload,
): Promise<ApiResponse<Book>> => {
  const now = new Date();
  return {
    status: 201,
    message: "Book created successfully",
    data: {
      ...payload,
      id: randomUUID(),
      createdAt: now,
      updatedAt: now,
    },
  };
};

const updateBook = async (
  id: EntityId,
  changes: BookUpdatePayload,
): Promise<ApiResponse<Book>> => {
  const fetchedBook = await fetchBook(id);

  return {
    ...fetchedBook,
    message: "Book updated successfully",
    data: {
      ...fetchedBook.data,
      ...changes,
      updatedAt: new Date(),
    },
  };
};

const parseIsbn = (isbn: string): IsbnParts => {
  const parts = isbn.split("-");
  const [group, publisher, titleIdentifier] = parts;

  if (
    parts.length !== 3 ||
    !group ||
    !/^\d+$/.test(group) ||
    !publisher ||
    !titleIdentifier
  ) {
    throw new Error("Expected format: group-publisher-titleIdentifier");
  }
  return [Number(group), publisher, titleIdentifier];
};
