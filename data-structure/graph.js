/**
 * Here’s a comprehensive example of linear and non-linear data structures in JavaScript, including documentation and explanation for each function, as well as practical applications. We’ll cover:
 * 1. Linear Data Structures:
 *    - Arrays
 *    - Stacks
 *    - Queues (including Priority Queue)
 *    - Linked Lists
 * 2. Non-Linear Data Structures:
 *    - Trees (Binary Search Tree)
 *    - Graphs (Adjacency List representation)
 *
 * Each data structure will include:
 *    - Definition and properties.
 *    - Implementation in JavaScript.
 *    - Key operations like insert, delete, search, and traversal.
 *    - Practical applications.
 */

/**
 * 1. Linear Data Structures
 *
 * 1.1 Array
 *
 * Definition: A collection of elements stored at contiguous memory locations, accessible via an index.
 *
 * Applications:
 *    - Managing ordered collections.
 *    - Storing sequential data like playlists, to-do lists.
 */

// Array Example: Basic operations
const array = [];

// 1. Insert elements
array.push(10); // Add to end
array.push(20);
array.unshift(5); // Add to start
console.log("Array after insertion:", array);

// 2. Access element
console.log("First element:", array[0]);

// 3. Delete elements
array.pop(); // Remove last
array.shift(); // Remove first
console.log("Array after deletion:", array);

// 4. Search
const index = array.indexOf(10);
console.log("Index of 10:", index);

/**
 * 1.2 Stack
 *
 * Definition: A LIFO (Last In, First Out) data structure where the last element added is the first to be removed.
 *
 * Applications:
 *    - Function call stack.
 *    - Undo/Redo functionality in text editors.
 */

class Stack {
	constructor() {
		this.items = [];
	}

	// Push: Add an item to the top
	push(element) {
		this.items.push(element);
	}

	// Pop: Remove the top item
	pop() {
		if (this.isEmpty()) return null;
		return this.items.pop();
	}

	// Peek: View the top item
	peek() {
		return this.isEmpty() ? null : this.items[this.items.length - 1];
	}

	// Check if empty
	isEmpty() {
		return this.items.length === 0;
	}
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log("Stack top:", stack.peek()); // Output: 20
stack.pop();
console.log("Stack after pop:", stack.peek()); // Output: 10

/**
 * 1.3 Queue
 *
 * Definition: A FIFO (First In, First Out) data structure where the first element added is the first to be removed.
 *
 * Applications:
 *    - Job scheduling in operating systems.
 *    - Printing tasks.
 */

class Queue {
	constructor() {
		this.items = [];
	}

	// Enqueue: Add an item
	enqueue(element) {
		this.items.push(element);
	}

	// Dequeue: Remove the first item
	dequeue() {
		if (this.isEmpty()) return null;
		return this.items.shift();
	}

	// Peek: View the front item
	peek() {
		return this.isEmpty() ? null : this.items[0];
	}

	// Check if empty
	isEmpty() {
		return this.items.length === 0;
	}
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("Queue front:", queue.peek()); // Output: 10
queue.dequeue();
console.log("Queue after dequeue:", queue.peek()); // Output: 20

/**
 * 1.4 Linked List
 *
 * Definition: A sequence of nodes where each node contains data and a reference to the next node.
 *
 * Applications:
 *    - Dynamic memory allocation.
 *    - Navigation systems (e.g., a chain of locations).
 */

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// Insert at end
	append(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	// Search for a value
	search(value) {
		let current = this.head;
		while (current) {
			if (current.data === value) return true;
			current = current.next;
		}
		return false;
	}

	// Delete a node
	delete(value) {
		if (!this.head) return;

		if (this.head.data === value) {
			this.head = this.head.next;
			return;
		}

		let current = this.head;
		while (current.next && current.next.data !== value) {
			current = current.next;
		}

		if (current.next) {
			current.next = current.next.next;
		}
	}

	// Print the list
	printList() {
		let current = this.head;
		const result = [];
		while (current) {
			result.push(current.data);
			current = current.next;
		}
		console.log("Linked List:", result.join(" -> "));
	}
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Output: Linked List: 10 -> 20 -> 30
console.log("Search 20:", list.search(20)); // Output: true
list.delete(20);
list.printList(); // Output: Linked List: 10 -> 30

/**
 * 2. Non-Linear Data Structures
 *
 * 2.1 Binary Search Tree (BST)
 *
 * Definition: A tree where each node has at most two children, and the left child is smaller, the right child is larger.
 *
 * Applications:
 *    - Databases and search engines.
 *    - Hierarchical data representation.
 */

class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// Insert a node
	insert(data) {
		const newNode = new TreeNode(data);

		if (!this.root) {
			this.root = newNode;
		} else {
			this._insertNode(this.root, newNode);
		}
	}

	_insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (!node.left) node.left = newNode;
			else this._insertNode(node.left, newNode);
		} else {
			if (!node.right) node.right = newNode;
			else this._insertNode(node.right, newNode);
		}
	}

	// In-order traversal
	inOrder(node = this.root) {
		if (node) {
			this.inOrder(node.left);
			console.log(node.data);
			this.inOrder(node.right);
		}
	}
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(5);
console.log("In-order traversal:");
bst.inOrder(); // Output: 5, 10, 20

/**
 * 2.2 Graph (Adjacency List)
 *
 * Definition: A collection of nodes (vertices) connected by edges, represented as an adjacency list.
 *
 * Applications:
 *    - Social networks.
 *    - Routing algorithms.
 */

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	// Add a vertex
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	// Add an edge
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	// Print the graph
	printGraph() {
		for (const vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
		}
	}
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.printGraph();
