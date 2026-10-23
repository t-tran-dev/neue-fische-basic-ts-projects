import { headphones, orders } from "./dataMock.js";
import { formatOrder, isInStock } from "./operations.js";

console.log(formatOrder(orders[0]));
console.log(isInStock(headphones));
