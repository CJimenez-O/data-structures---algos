// //////////////////////// HASH TABLE //////////////////
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
console.log(myTable.table[2]);
console.log(myTable.table.length);
