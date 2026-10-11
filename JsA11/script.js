const products = [
  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// Part 1: Sort Questions
// 1. Sort products by price (low to high)
const byPriceLow = products.sort((a, b) => a.price - b.price);
console.log(byPriceLow);
//2. Sort products by price (high to low)
const byPriceHigh = products.sort((a, b) => b.price - a.price);
console.log(byPriceHigh);
//3. Sort products by name (A to Z)
const byName = products.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
console.log(byName);
//4. Sort products by rating (highest first)
const byRating = products.sort((a, b) => b.rating - a.rating);
console.log(byRating);
//5. Sort products by quantity (lowest to highest)
const byQuantity = products.sort((a, b) => a.quantity - b.quantity);
console.log(byQuantity);
//6. Find the 3 most expensive products using sort() and slice()
const top3Expensive = products.sort((a, b) => b.price - a.price).slice(0, 3);
console.log(top3Expensive);
//7. Find the 2 cheapest products using sort() and slice()
const top2Cheap = products.sort((a, b) => a.price - b.price).slice(0, 2);
console.log(top2Cheap);
//8. Filter products priced below Rs. 10,000, then sort by price (low to high)
const below10k = products.filter((p) => p.price < 10000).sort((a, b) => a.price - b.price);
console.log(below10k);
//9. Find the top 3 highest-rated products using sort() and slice()
const top3Rated = products.sort((a, b) => b.rating - a.rating).slice(0, 3);
console.log(top3Rated);
//10. Sort by rating (highest first). If ratings are equal, sort by price (low to high)
const sortedRatingPrice = products.sort((a, b) => {
  if (b.rating !== a.rating) {
    return b.rating - a.rating;
  }
  return a.price - b.price;
});
console.log(sortedRatingPrice);
//Part 2: Reduce Questions
//1. Calculate the total price of all products
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log(totalPrice);
//2. Calculate the total quantity of all products
const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
console.log(totalQuantity);
//3. Calculate the average price of all products
const averagePrice =products.reduce((sum, p) => sum + p.price, 0) / products.length;
console.log(averagePrice);
//4. Find the most expensive product using reduce()
const mostExpensive = products.reduce((max, p) => {
  if (p.price > max.price) {
    return p;
  }
  return max;
});
console.log(mostExpensive);
//5. Find the cheapest product using reduce()
const cheapestProduct = products.reduce((min, p) => {
  if (p.price < min.price) {
    return p;
  }
  return min;
});
console.log(cheapestProduct);
//6. Find the highest-rated product using reduce()
const highestRated = products.reduce((best, p) => {
  if (p.rating > best.rating) {
    return p;
  }
  return best;
});
console.log(highestRated);
//7. Count how many products have a price greater than Rs. 5,000
const countAbove5k = products.reduce((count, p) => {
  if (p.price > 5000) {
    return count + 1
  }
  return count;
},0);
console.log(countAbove5k);
//8. Calculate the total inventory value using price * quantity
const inventoryValue = products.reduce((sum, p) => {
return sum + p.price * p.quantity;
}, 0);
console.log(inventoryValue);
//9. Calculate the total quantity of products with a rating above 4.3
const quantityAbove43 = products.reduce((sum, p) => {
  if(p.rating > 4.3){  
  return sum + p.quantity
  } 
  return sum;
}, 0);
console.log(quantityAbove43);
//10. Use one reduce() to create an object containing:
const summary = products.reduce(
  (acc, p) => {
    acc.totalProducts += 1;
    acc.totalQuantity += p.quantity;
    acc.totalInventoryValue += p.price * p.quantity;
    return acc;
  },
  {
    totalProducts: 0,
    totalQuantity: 0,
    totalInventoryValue: 0
  }
);
console.log(summary);