// @ts-check

const numbersES6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//* ********* using for..of loop
for (const n of numbersES6) {
	console.log(`for..of loop: ${n} % 2 === 0`, n % 2 === 0 ? 'even' : 'odd')
}

//* ********* Using the new ES6 iterator (@@iterator)
console.log('Using the new ES6 iterator (@@iterator)')

let iterator = numbersES6[Symbol.iterator]()
console.log('iterator.next().value', iterator.next().value) // 1
console.log('iterator.next().value', iterator.next().value) // 2
console.log('iterator.next().value', iterator.next().value) // 3
console.log('iterator.next().value', iterator.next().value) // 4
console.log('iterator.next().value', iterator.next().value) // 5

// or use code below
iterator = numbersES6[Symbol.iterator]()
for (const n of iterator) {
	console.log(`${n} of iterator`, n)
}

//* ********* Array entries, keys and values
console.log('Array entries, keys and values')

console.log('Array.entries')
let aEntries = numbersES6.entries() // retrieve iterator of key/value
console.log('aEntries.next().value', aEntries.next().value) // [0, 1] - position 0, value 1
console.log('aEntries.next().value', aEntries.next().value) // [1, 2] - position 1, value 2
console.log('aEntries.next().value', aEntries.next().value) // [2, 3] - position 2, value 3

// or use code below
aEntries = numbersES6.entries()
for (const n of aEntries) {
	console.log(`entry of ${n}`, n)
}

console.log('Array.keys')
const aKeys = numbersES6.keys() // retrieve iterator of keys
console.log('aKeys.next()', aKeys.next()) // {value: 0, done: false } done false means iterator has more values
console.log('aKeys.next()', aKeys.next()) // {value: 1, done: false }
console.log('aKeys.next()', aKeys.next()) // {value: 2, done: false }

console.log('Array.values - Only Edge and Safari - Oct 2017')
// const aValues = numbersES6.values();
// console.log(aValues.next()); // {value: 1, done: false } done false means iterator has more values
// console.log(aValues.next()); // {value: 2, done: false }
// console.log(aValues.next()); // {value: 3, done: false }

//* ********* Using the from method
console.log('Using the from method')

const evens = Array.from(numbersES6, (x) => x % 2 === 0)
console.log('Array.from(numbersES6, x => x % 2 === 0)', evens)

const numbersES62 = Array.from(numbersES6)
console.log('Array.from(numbersES6)', numbersES62)

//* ********* Using Array.of
console.log('Using Array.of')

const numbersES63 = Array.of(1)
const numbersES64 = Array.of(1, 2, 3, 4, 5, 6)
const numbersES6Copy = Array.of(...numbersES64)
console.log('Array.of(1)', numbersES63)
console.log('Array.of(1, 2, 3, 4, 5, 6)', numbersES64)
console.log('Array.of(...numbersES64)', numbersES6Copy)

//* ********* Using the fill method
console.log('Using the fill method')

numbersES6Copy.fill(0)
console.log('numbersES6Copy.fill(0)', numbersES6Copy)

numbersES6Copy.fill(2, 1)
console.log('numbersES6Copy.fill(2, 1)', numbersES6Copy)

numbersES6Copy.fill(1, 3, 5)
console.log('numbersES6Copy.fill(1, 3, 5)', numbersES6Copy)

const ones = Array(6).fill(1)
console.log('Array(6).fill(1)', ones)

//* ********* Using the copyWithin method
console.log('Using the copyWithin method')

let copyArray = [1, 2, 3, 4, 5, 6]
console.log('copyArray', copyArray)

copyArray = copyArray.copyWithin(0, 3) // pos 3 value is copied to pos 0
console.log('copyArray.copyWithin(0, 3)', copyArray)

copyArray = [1, 2, 3, 4, 5, 6]
copyArray = copyArray.copyWithin(1, 3, 5) // pos 3-4 values are copied to pos 1-2
console.log('copyArray.copyWithin(1, 3, 5)', copyArray)

//* ********* methods find and findIndex
console.log('methods find and findIndex')

function multipleOf13(element) {
	return element % 13 === 0
}

console.log('numbersES6.find(multipleOf13)', numbersES6.find(multipleOf13))
console.log(
	'numbersES6.findIndex(multipleOf13)',
	numbersES6.findIndex(multipleOf13),
)

//* ********* EcmaScript 2016 (ES7): using the method includes
console.log('EcmaScript 2016 (ES7): using the method includes')

console.log('numbersES6.includes(15)', numbersES6.includes(15))
console.log('numbersES6.includes(20)', numbersES6.includes(20))

const numbersES65 = [7, 6, 5, 4, 3, 2, 1]
console.log('numbersES65.includes(4, 5)', numbersES65.includes(4, 5))
