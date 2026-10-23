export type Product = {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
};

export type Category = {
  readonly id: number;
  name: string;
  productIds: number[];
  description?: string;
};

export type Customer = {
  readonly id: number;
  name: string;
  email: string;
};

export type LineItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  readonly id: number;
  customerId: number;
  lineItems: LineItem[];
  status: "pending" | "confirmed" | "shipped";
};
