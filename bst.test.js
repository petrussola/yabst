const BinarySearchTree = require('./bst');

let bst = new BinarySearchTree(10);

afterEach(() => {
	bst.cleanup();
});

test('Binary Search Tree gets created', () => {
	expect(bst.value).toEqual(10);
	expect(bst.left).toEqual(null);
	expect(bst.right).toEqual(null);
});
