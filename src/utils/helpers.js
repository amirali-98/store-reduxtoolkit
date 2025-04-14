export function calculateQuantity(items, id) {
  return items.find(i => +i.id === id)?.quantity || 0;
}

export function calculateTotalItems(items) {
  return items.reduce((acc, i) => i.quantity + acc, 0);
}

export function calculateTotalCost(items) {
  return items.reduce((acc, i) => i.quantity * i.price + acc, 0);
}

export function filterBySearch(products, search) {
  if (search && search !== "") {
    return products.filter(p =>
      p.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  return products;
}

export function filterByCategory(products, category) {
  if (category && category !== "all") {
    return products.filter(p => p.category === category);
  }
  return products;
}
