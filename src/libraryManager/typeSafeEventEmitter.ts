import { booksMock } from "./mocks.js";
import type { Book, EntityId } from "./types.js";

type BookEvents = {
  bookAdded: Book;
  bookRemoved: { id: EntityId };
  searchPerformed: { query: string; resultCount: number };
};

const createEmitter = <Events>() => {
  const handlers: {
    [K in keyof Events]?: ((payload: Events[K]) => void)[];
  } = {};

  const on = <K extends keyof Events>(
    event: K,
    handler: (payload: Events[K]) => void,
  ): void => {
    if (!handlers[event]) handlers[event] = [];
    handlers[event].push(handler);
  };

  const emit = <K extends keyof Events>(event: K, payload: Events[K]): void => {
    if (!handlers[event]) return;
    handlers[event].forEach((handler) => handler(payload));
  };

  return { on, emit };
};

const emitter = createEmitter<BookEvents>();

emitter.on("bookAdded", (payload: Book) => {
  console.log("Title:", payload.title, "| Author:", payload.author);
});

emitter.on("searchPerformed", (payload) => {
  console.log(payload.query, payload.resultCount);
});

emitter.emit("bookAdded", booksMock[0]);

emitter.emit("searchPerformed", {
  query: "hobbit",
  resultCount: 1,
});
