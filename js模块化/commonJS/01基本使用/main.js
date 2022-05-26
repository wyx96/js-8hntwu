// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const { name, age, sum } = require('./why');

console.log(name, 'name');
console.log(age, 'age');
console.log(sum(1, 2), 'sum');
