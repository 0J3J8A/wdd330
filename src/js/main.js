// src/js/main.js
import ProductData from './ProductData.js';
import ProductList from './ProductList.js';

// Create instance of ProductData
const productData = new ProductData('tents');

// Get the ul class "product-list" Line 62  src/cart/index.html
const listElement = document.querySelector('.product-list');

// Create instance of ProductList
const productList = new ProductList('tents', productData, listElement);
console.log('ProductList instance:', productList);