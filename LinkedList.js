// ////////////////////////// Linked List //////////////////////////////
// class Linked{
// 	constructor()
// 	append()
// 	prepend()
// 	traverse()
// 	insert()
// 	remove()
// }

class LinkedList {
	// constructor function gets value and creates head that has value: value and next: null
	// set tail = head
	// length = 1
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
		// console.log(this.tail);
	}

	// append adds a new element to end of list
	// create newNode
	// set tail.next point to newNode
	// set tail = newNode
	// length get bigger
	// return this
	append(value) {
		const newNode = {
			value: value,
			next: null,
		};
		// console.log(this.tail.next);
		this.tail.next = newNode;
		// console.log(this.tail.next);
		// console.log(this.tail);
		this.tail = newNode;
		// console.log(this.tail);
		this.length++;
		return this;
	}

	// prepend add new element to beginning
	// create newNode
	// newNode.next points to newNode
	// this.head = newNode
	// length gets bigger
	// return this
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

	// insert function adds value to given index
	// if index is greater than list length return append(value);
	// if index equals 0 return prepend(value)
	// create newNode
	// create leader by running traverseToIndex(index-1)
	// create holderPointer to leader.next
	// leader.next point to newNode
	// newNode.next point to holderPointer
	// length of list gets bigger
	// return this
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		if (index === 0) {
			this.prepend(value);
		}
		const newNode = {
			value: value,
			next: null,
		};
		const leader = this.traverseToIndex(index - 1);
		console.log(leader);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}

	// this function traverses through list
	// create counter = 0
	// currentNode = this.head
	// while counter does not equal index you chose
	// set currentNode point to currentNode.next
	// counter++
	// return currentNode
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	// removes value from index chosen
	// leader = traverToIndex(index-1)
	// unWantedNode = leader.next
	// leader.next = unWantedNode.next
	// length of index get shorter
	// return this
	remove(index) {
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this;
	}
}

let data = new LinkedList(10);
// {10 -> null}
data.prepend(1);
// {1 -> 10 -> null}
data.append(5);
// {1 -> 10 -> 5 -> null}
data.remove(1);
// {10 -> 5 -> null}
data.insert(1, 99);
// {10 -> 99 -> 5 -> null}
