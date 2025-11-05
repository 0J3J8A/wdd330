// src/js/main.js
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// Create instance of ProductData
const productData = new ProductData('tents');

// Get the ul class "product-list"
const listElement = document.querySelector('.product-list');

// Create instance of ProductList
const productList = new ProductList("Tents", dataSource, element);

productList.init();