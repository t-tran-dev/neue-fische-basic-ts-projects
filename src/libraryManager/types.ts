type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type EntityId = number | string;

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type HasId = {
  id: EntityId;
};

export type Book = {
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
} & HasId &
  Timestamped;

export type IsbnParts = [
  group: number,
  publisher: string,
  titleIdentifier: string,
];

export type ApiResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export type BookCreatePayload = Omit<Book, "id" | "createdAt" | "updatedAt">;

export type BookUpdatePayload = MyPartial<BookCreatePayload>;

export type BookPreview = MyPick<Book, "id" | "title" | "author">;
