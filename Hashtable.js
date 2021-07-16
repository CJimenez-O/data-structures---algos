// //////////////////////// HASH TABLE //////////////////
// can set any index of any kind
// function hash()

// class Hash{
// 	constructor()
// 	setItem()
// 	getItem()
// }

// hash funciton to prevent collisions and enter elements in different keys
// using a for loop the function grabs the string and table length
// loops through string length and returns hash = ((hash + s.charCodeAt(i)) * i) % tableSize;
function hash(s, tableSize) {
	let hash = 0;

	for (let i = 0; i < s.length; i++) {
		hash = ((hash + s.charCodeAt(i)) * i) % tableSize;
	}

	console.log(hash);
	return hash;
}

// create new array
class HashTable {
	constructor(size) {
		this.table = new Array(size);
	}
	newItems = 0;

	// newTable =  current table length * 2
	// grabs each item in current table
	// runs it through hash function again
	// push it to new table
	// then sets this.table = newTable
	reSize = () => {
		const newTable = new Array(this.table.length * 2);
		console.log(newTable.length);
		this.table.forEach((item) => {
			if (item) {
				item.forEach(([key, value]) => {
					const idx = hash(key, newTable.length);
					if (newTable[idx]) {
						newTable[idx].push([key, value]);
					} else {
						newTable[idx] = [[key, value]];
					}
				});
			}
		});
		this.table = newTable;
	};

	// creates load factor to newItems / table length
	// if loadfactor is more than 80% run resize function
	// idx = key and table length ran through hash function
	// if key exist push it to table[idx]
	// else set table[idx] = [[key,value]]
	// ^ sets table[idx] element to become array

	setItem = (key, value) => {
		this.newItems++;
		const loadFactor = this.newItems / this.table.length;
		console.log(loadFactor);
		if (loadFactor > 0.8) {
			console.log("resize");
			// resize array
			this.reSize();
		}
		const idx = hash(key, this.table.length);
		// avoids collisions
		if (this.table[idx]) {
			this.table[idx].push([key, value]);
		} else {
			this.table[idx] = [[key, value]];
		}
	};

	// to getItem you gey the key and run it rthrough hash function to ind idx
	// then return it by using .find
	getItem = (key) => {
		const idx = hash(key, this.table.length);
		if (!this.table[idx]) {
			return null;
		}
		return this.table[idx].find((x) => x[0] === key)[1];
	};
}

const myTable = new HashTable(5);
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "perez");
myTable.setItem("bod", "1/2/3");
// 				 key       value
// [ [[lastName, perez]], empty , [[bod, 1/2/3]], empty, [[firstName, bob]] ]
console.log(myTable.table);
console.log(myTable.table.length);

/////////////////////////////find amount of identical pairs//////////////////////////
// creates map of unique values/keys = 1 then if they repeat add 1 to that keys value;

// function(){
// 	create map
// 	create Counter
// 	for(){
// 		if(map[index] exist){
// 			add to counter
// 			add to map index
// 		}
// 		// if it doesnt exist
// 		else{
// 			map[index] = 1
// 		}
// 	}
// 	return counter
// }

function findIdenticalPairs(nums) {
	const map = {};
	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		// if exist add to count

		if (map[nums[i]]) {
			count += map[nums[i]];
			map[nums[i]]++;
		} else {
			map[nums[i]] = 1;
		}
	}

	console.log(map);
	console.log(count);
	return count;
}
findIdenticalPairs([1, 2, 3, 1, 1, 3]);

/////////////////////////// jewels and stones | compare two array or strings  ////////////////////////
// creates map of 1st array elements then checks if any keys are in the second array
// if it does add to counter

function count(Jewels, Stones) {
	let hash = {};
	let count = 0;

	for (let j = 0; j < Jewels.length; j++) {
		console.log(Jewels[j]);
		hash[Jewels[j]] = Jewels[j];
	}

	console.log(hash);

	for (let i = 0; i < Stones.length; i++) {
		console.log(Stones[i]);
		if (hash[Stones[i]]) {
			count++;
		}
	}
	console.log(count);
	return count;
}

count("aA", "aAAbbbb");

////////////////////////////// smaller than current ////////////////////
// create counter , index , map {}, result []
// loop through and add all elements of nums to object
// while index !== param.length
// loop through array and compare object
// add counter to result[]
// return result[]

var smallerNumbersThanCurrent = function (nums) {
	let map = {};
	let index = 0;
	let counter = 0;
	let result = [];
	//     {6: 6, 5:5, 4:4, 8:8}
	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = nums[i];
	}
	console.log(map);

	while (index !== nums.length) {
		for (let j = 0; j < nums.length; j++) {
			console.log(nums[j], "-", map[nums[index]]);
			if (map[nums[index]] > nums[j]) {
				counter++;
			}
		}
		result.push(counter);
		counter = 0;
		index++;
	}

	console.log(result);
	return result;

	// let counter = 0;
	// let result = [];

	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = 0; j < nums.length; j++) {
	// 		if (nums[i] > nums[j]) {
	// 			counter++;
	// 		}
	// 	}
	// 	result.push(counter);
	// 	counter = 0;
	// }
	// console.log(result)
	// return result;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));

////////////////////////// alpahbet check /////////////////////
// create object
// insert elelemts on sentence in array
// if object length is less than 26 return false

var checkIfPangram = function (sentence) {
	let res = {};
	for (let i = 0; i < sentence.length; i++) {
		console.log(sentence[i]);
		res[sentence[i]] = 1;
	}
	console.log(res);
	// length of object is currently 3
	if (Object.entries(res).length < 26) {
		return false;
	}
	return true;
};

console.log(checkIfPangram("abc"));

// ////////////////////// mors code //////////////////////////
var uniqueMorseRepresentations = function (words) {
	const morse = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];

	let map = {};

	// creates map
	for (let i = 0; i < morse.length; i++) {
		// map { a: '.-', b: '-...', ect.}
		map[String.fromCharCode(i + 97)] = morse[i];
	}

	let transform = [];
	for (let word of words) {
		console.log(word);
		let str = "";
		// this loop creates words in morse
		for (let char of word) {
			console.log(char);
			str += map[char];
		}

		console.log(str);
		// if it doesnt include string add str to transform
		if (!transform.includes(str)) {
			console.log(str);
			transform.push(str);
		}
	}
	console.log(transform);
	return transform.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
