class BinarySearchTree {
	constructor(value) {
		// value of root node
		this.value = value;
		// value of left node
		this.left = null;
		// value of right node
		this.right = null;
	}

	// clean up left and right from root node
	cleanup() {
		this.left = null;
		this.right = null;
		return this;
	}

	// insert value
	insert(value) {
		// if root node is empty, set root node value to value
		if (value === this.value) {
			this.value = value;
			// if value < root value
		} else if (value < this.value) {
			// if this.left is null
			if (this.left === null) {
				// set this.left to new bst passing the value
				this.left = new BinarySearchTree(value);

				// otherwise, call insert on this.left
			} else {
				this.left.insert(value);
			}
			// if value > root value
		} else if (value > this.value) {
			// if this.right is null
			if (this.right === null) {
				// set this.right to new bst passing the value
				this.right = new BinarySearchTree(value);
				// otherwise, call insert on this.right
			} else {
				this.right.insert(value);
			}
		}
		// return bst
		return this;
	}
}

module.exports = BinarySearchTree;
