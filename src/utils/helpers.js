export function calculateQuantity(items, id) {
  return items.find(i => +i.id === id)?.quantity || 0;
}

export function calculateTotalItems(items) {
  return items.reduce((acc, i) => i.quantity + acc, 0);
}

export function calculateTotalCost(items) {
  return items.reduce((acc, i) => i.quantity * i.price + acc, 0);
}
