// @ts-check
/* eslint-disable */
// import { circleArea, squareArea } from './util/calculate-area'; // {2}
// import { circleArea as circle } from './util/calculate-area';

// console.log(circleArea(2));
// console.log(squareArea(2));

/* Different way of importing the module  */
// import * as area from './util/calculate-area';
// import Book from './class/book';

import * as area from './util/calculate-area.js'; // we need the .js to run this code in the browser
import Book from './class/book.js';

console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book('some title');
myBook.printTitle();
