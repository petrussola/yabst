const BinarySearchTree = require('./bst');

let bst = new BinarySearchTree(10);

afterEach(() => {
	bst.cleanup();
	bst.insert(5);
	bst.insert(7);
	bst.insert(3);
	bst.insert(8);
	bst.insert(2);
	bst.insert(15);
	bst.insert(12);
	bst.insert(17);
	bst.insert(16);
});

test('Binary Search Tree gets created', () => {
	expect(bst.value).toEqual(10);
	expect(bst.left).toEqual(null);
	expect(bst.right).toEqual(null);
});

test('Insert values', () => {
	expect(bst.left.value).toEqual(5);
	expect(bst.left.right.right.value).toEqual(8);
	expect(bst.left.left.left.value).toEqual(2);
	expect(bst.left.left.left.right).toEqual(null);
	expect(bst.right.value).toEqual(15);
	expect(bst.right.right.left.value).toEqual(16);
	expect(bst.right.left.value).toEqual(12);
	expect(bst.right.left.right).toEqual(null);
});
