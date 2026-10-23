import type { LineItem, Order, Product } from "./type.js";

const orderTotal = (order: Order): number =>
  order.lineItems.reduce((acc: number, curr: LineItem) => {
    return (acc += curr.product.price * curr.quantity);
  }, 0);

export const formatOrder = (order: Order): string => {
  const { id, customerId, lineItems, status } = order;
  const header = `Order No.: ${id} | Status: ${status}`;
  const customer = `Customer ID: ${customerId}`;
  const orderListHeader = "Product Name | Quantity | Price | Subtotal";
  const orderList = lineItems
    .map(({ product, quantity }) => {
      const { name, price } = product;
      return `${name} | ${quantity} | ${price} | ${quantity * price} |`;
    })
    .join("\n");
  const total = `Total: ${orderTotal(order)}`;

  const summary = [header, customer, orderListHeader, orderList, total].join(
    "\n",
  );

  return summary;
};

export const isInStock = (product: Product): boolean => product.stock > 0;
