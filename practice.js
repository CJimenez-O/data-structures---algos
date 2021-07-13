function hash(s, tableSize) {
	let hash = 0;

	for (let i = 0; i < s.length; i++) {
		hash = ((hash + s.charCodeAt(i)) * i) % tableSize;
	}

	console.log(hash);
	return hash;
}

class hashTable {
	constructor(size) {
		this.table = new Array(size);
	}

	setItem = (key, value) => {
		let idx = hash(key, this.table.length);
		if (this.table[idx]) {
			this.table[idx].push([key, value]);
		} else {
			this.table[idx] = [[key, value]];
		}
	};

	getItem = (key) => {
		let idx = hash(key, this.table.length);
		return this.table[idx].find((x) => x[0] === key)[1];
	};
}

let mine = new hashTable(10);
mine.setItem("name", "chris");
mine.setItem("age", 23);
console.log(mine.getItem("name"));
