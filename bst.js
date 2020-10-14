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
}

module.exports = BinarySearchTree;
