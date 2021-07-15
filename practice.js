class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	traverse(index) {
		let counter = 0;
		let currentNode = this.head;
		while (index !== counter) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		if (index === 0) {
			return this.prepend(value);
		}
		const newNode = {
			value: value,
			next: null,
		};
		const leader = this.traverse(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}
	remove(index) {
		const leader = this.traverse(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this;
	}
}

let data = new LinkedList(97);
data.append(10);
data.append(55);
data.insert(0, 4);
console.log(data);
