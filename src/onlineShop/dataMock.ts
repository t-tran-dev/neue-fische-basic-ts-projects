import type {
  Product,
  // Customer, Category,
  Order,
} from "./type.js";

const keyboard: Product = {
  id: 1,
  name: "Mechanical Keyboard",
  price: 89.99,
  stock: 15,
};

const mouse: Product = {
  id: 2,
  name: "Wireless Mouse",
  price: 34.5,
  stock: 30,
};

const monitor: Product = {
  id: 3,
  name: "27-inch Monitor",
  price: 249,
  stock: 8,
};

export const headphones: Product = {
  id: 4,
  name: "Headphones",
  price: 59.99,
  stock: 0,
};

const notebook: Product = {
  id: 5,
  name: "Notebook",
  price: 4.5,
  stock: 100,
};

const pen: Product = {
  id: 6,
  name: "Ballpoint Pen",
  price: 1.25,
  stock: 200,
};

export const orders: Order[] = [
  {
    id: 101,
    customerId: 1,
    lineItems: [
      { product: keyboard, quantity: 1 },
      { product: mouse, quantity: 2 },
    ],
    status: "pending",
  },
  {
    id: 102,
    customerId: 2,
    lineItems: [
      { product: monitor, quantity: 2 },
      { product: headphones, quantity: 1 },
    ],
    status: "confirmed",
  },
  {
    id: 103,
    customerId: 3,
    lineItems: [
      { product: notebook, quantity: 5 },
      { product: pen, quantity: 10 },
    ],
    status: "shipped",
  },
  {
    id: 104,
    customerId: 1,
    lineItems: [{ product: notebook, quantity: 1 }],
    status: "confirmed",
  },
];

// const products: Product[] = [
//   keyboard,
//   mouse,
//   monitor,
//   headphones,
//   notebook,
//   pen,
// ];

// const customers: Customer[] = [
//   {
//     id: 1,
//     name: "Alex Morgan",
//     email: "alex@example.com",
//   },
//   {
//     id: 2,
//     name: "Sam Rivera",
//     email: "sam@example.com",
//   },
//   {
//     id: 3,
//     name: "Jordan Lee",
//     email: "jordan@example.com",
//   },
// ];

// const categories: Category[] = [
//   {
//     id: 1,
//     name: "Computer Accessories",
//     productIds: [keyboard.id, mouse.id, headphones.id],
//     description: "Accessories for your workspace.",
//   },
//   {
//     id: 2,
//     name: "Monitors",
//     productIds: [monitor.id],
//   },
//   {
//     id: 3,
//     name: "Stationery",
//     productIds: [notebook.id, pen.id],
//     description: "Everyday writing supplies.",
//   },
//   {
//     id: 4,
//     name: "Special Offers",
//     productIds: [],
//   },
// ];
