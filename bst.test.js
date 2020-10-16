const BinarySearchTree = require('./bst');

let bst = new BinarySearchTree();

afterEach(() => {
	bst.cleanup();
	bst.insert(10);
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
	expect(bst.root).toEqual(null);
});

test('Insert values', () => {
	expect(bst.root.left.value).toEqual(5);
	expect(bst.root.left.right.right.value).toEqual(8);
	expect(bst.root.left.left.value).toEqual(3);
	expect(bst.root.left.left.left.value).toEqual(2);
	expect(bst.root.left.left.left.right).toEqual(null);
	expect(bst.root.right.value).toEqual(15);
	expect(bst.root.right.right.left.value).toEqual(16);
	expect(bst.root.right.left.value).toEqual(12);
	expect(bst.root.right.left.right).toEqual(null);
});

test('Find Minimum Value', () => {
	let temp = bst.findMinNode(bst.root);
	expect(temp.value).toEqual(2);
	bst.insert(1);
	temp = bst.findMinNode(bst.root);
	expect(temp.value).toEqual(1);
	temp = bst.findMinNode(bst.root.right.right);
	expect(temp.value).toEqual(16);
});

test('Remove values', () => {
	bst.remove(15);
	expect(bst.root.right.value).toEqual(16);
	expect(bst.root.right.left.value).toEqual(12);
	expect(bst.root.right.right.value).toEqual(17);
	expect(bst.root.right.right.right).toEqual(null);
	expect(bst.root.right.right.left).toEqual(null);
	bst.remove(7);
	expect(bst.root.right.left.value).toEqual(12);
	expect(bst.root.left.right.value).toEqual(8);
	expect(bst.root.left.left.value).toEqual(3);
	expect(bst.root.left.right.right).toEqual(null);
	expect(bst.root.left.right.left).toEqual(null);
	bst.remove(5);
	expect(bst.root.left.value).toEqual(8);
	expect(bst.root.left.left.value).toEqual(3);
	expect(bst.root.left.right).toEqual(null);
	bst.remove(10);
	expect(bst.root.value).toEqual(12);
	expect(bst.root.right.value).toEqual(16);
	expect(bst.root.left.value).toEqual(8);
});
