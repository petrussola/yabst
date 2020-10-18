class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// clean up left and right from root node
	cleanup() {
		this.root = null;
		return this;
	}

	// insert value
	insert(value) {
		// create new node with data
		const newNode = new Node(value);
		// if root is null, set root no newNode
		if (this.root === null) {
			this.root = newNode;
			return this;
			// otherwise, call insertNode on the root
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		// if newNode.value < node.value
		if (newNode.value < node.value) {
			// if node.left === null,
			if (node.left === null) {
				// node.left = newNode
				node.left = newNode;
				// otherwise
			} else {
				// call insertNode on the node.left
				this.insertNode(node.left, newNode);
			}
			// if newNode.value > node.value
		} else if (newNode.value > node.value) {
			// if node.right === null
			if (node.right === null) {
				// node.right = newNode
				node.right = newNode;
				// otherwise
			} else {
				// call insertNode on the node.right
				this.insertNode(node.right, newNode);
			}
		}
	}

	findMinNode(node) {
		// base case - if left is null, return this.value
		if (node.left === null) {
			return node;
			// else, call findMinValue on the left node
		} else {
			return this.findMinNode(node.left);
		}
	}

	remove(data) {
		// if root is null, return null
		if (this.root === null) {
			return null;
			// else, call removeNode passing this.root and data as argument
		} else {
			this.removeNode(this.root, data);
		}
	}

	removeNode(node, data) {
		// if data < node.value
		if (data < node.value) {
			// call removeNode passing node.left
			node.left = this.removeNode(node.left, data);
			return node;
			// if data > node.value
		} else if (data > node.value) {
			// call removeNode passing node.right
			node.right = this.removeNode(node.right, data);
			return node;
			// if data === node.data
		} else {
			// if node.left and node.right are null
			if (node.left === null && node.right === null) {
				// node = null
				node = null;
				// return null
				return null;
				// if node.left === null
			} else if (node.left === null) {
				// node = node.right
				node = node.right;
				return node;
				// if node.right === null
			} else if (node.right === null) {
				// node = node.left
				node = node.left;
				return node;
				// if left and right have data
			} else {
				// set temp to min node of node.right
				const temp = this.findMinNode(node.right);
				// node.value = temp.value
				node.value = temp.value;
				// this.removeNode(node.right, temp.value)
				node.right = this.removeNode(node.right, temp.value);
				return node;
			}
		}
	}

	getRootNode() {
		return this.root;
	}

	// search value method
	search(value) {
		// if bst has no root, return null
		if (this.root === null) {
			return null;
			// otherwise, call searchNode passing node and value
		} else {
			return this.searchNode(this.root, value);
		}
	}

	// auxiliary method to search value in node
	searchNode(node, value) {
		// return null if node is empty
		if (node === null) {
			return null;
			// if value is lower than node value, call method on left
		} else if (value < node.value) {
			return this.searchNode(node.left, value);
			// if value is higher than node value, call method on right
		} else if (value > node.value) {
			return this.searchNode(node.right, value);
			// if value matches node's value, return node
		} else {
			return node;
		}
	}
}

module.exports = BinarySearchTree;
