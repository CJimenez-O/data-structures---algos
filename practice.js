function hash(s, tableSize) {
	let hash = 0;
	for (let i = 0; i < s.length; i++) {
		hash = (hash + s.charCodeAt(i) * i) % tableSize;
	}
	console.log(hash);
	return hash;
}

class HashTable {
	constructor(size) {
		this.table = new Array(size);
	}

	setItem(key, value) {
		const index = hash(key, this.table.length);
		if (this.table[index]) {
			this.table.push([key, value]);
		} else {
			this.table[index] = [[key, value]];
		}
	}

	getItem(key) {
		let index = hash(key, this.table.length);
		return this.table[index].find((x) => x[0] === key)[1];
	}
}

let data = new HashTable(5);
data.setItem("name", "chris");
console.log(data.table);
