// type GroupableValue = string | number | boolean;

import { booksMock } from "./mocks.js";

// type KeysOfType<T, Allowed> = {
//   [K in keyof T]-?: T[K] extends Allowed ? K : never;
// }[keyof T];

// type GroupableKey<T> = KeysOfType<T, GroupableValue>;

// function groupBy<T, K extends GroupableKey<T>>(
//   items: T[],
//   key: K,
// ): Record<string, T[]> {}

const pluck = <T, K extends keyof T>(items: T[], key: K): T[K][] =>
  items.map((item) => item[key]);

// const merge = <T>(base: T, updates: Partial<T>): T => {
//   return { ...base, ...updates };
// };

const merge = <T extends Record<string, unknown>>(
  base: T,
  updates: Partial<T>,
): T => ({
  ...base,
  ...updates,
});

console.log(pluck(booksMock, "title"));
console.log(merge(booksMock[0], { isAvailable: false }));
