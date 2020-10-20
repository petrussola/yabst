const BinarySearchTree = require('../lib/bst');

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

test('Insert non numerical values', () => {
	const testErrorString = () => {
		bst.insert('10');
	};
	const testErrorUndefined = () => {
		bst.insert(undefined);
	};
	bst.cleanup();
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	bst.insert(10);
	expect(bst.root.value).toEqual(10);
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	expect(bst.root.value).toEqual(10);
	expect(bst.root.left).toEqual(null);
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

test('Remove non numerical value', () => {
	const testErrorString = () => {
		bst.remove('10');
	};
	const testErrorUndefined = () => {
		bst.remove(undefined);
	};
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	expect(bst.root.value).toEqual(10);
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	expect(bst.root.value).toEqual(10);
	bst.remove(15);
	expect(bst.root.right.value).toEqual(16);
});

test('Get root node', () => {
	expect(bst.getRootNode().value).toEqual(10);
	bst.remove(10);
	expect(bst.getRootNode().value).toEqual(12);
	bst.remove(12);
	expect(bst.getRootNode().value).toEqual(15);
});

test('Search node', () => {
	expect(bst.search(12).value).toEqual(12);
	expect(bst.search(15).value).toEqual(15);
	expect(bst.search(7).value).toEqual(7);
	expect(bst.search(3).value).toEqual(3);
	expect(bst.search(1)).toEqual(null);
	expect(bst.search(10).value).toEqual(10);
	bst.remove(10);
	expect(bst.search(10)).toEqual(null);
	expect(bst.search(16).value).toEqual(16);
	bst.remove(16);
	expect(bst.search(16)).toEqual(null);
	bst.insert(16);
	expect(bst.search(16).value).toEqual(16);
	expect(bst.search(25)).toEqual(null);
	bst.insert(25);
	expect(bst.search(25).value).toEqual(25);
});

test('Search with no numeric input', () => {
	const testErrorString = () => {
		bst.search('10');
	};
	const testErrorUndefined = () => {
		bst.search(undefined);
	};
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	expect(bst.search(12).value).toEqual(12);
	expect(bst.search(15).value).toEqual(15);
	expect(testErrorString).toThrowError();
	expect(testErrorUndefined).toThrowError();
	bst.remove(10);
	expect(bst.search(10)).toEqual(null);
})

test('Numeric input helper', () => {
	expect(bst.isNumericInput(10)).toEqual(true);
	expect(bst.isNumericInput('ten')).toEqual(false);
	expect(bst.isNumericInput('10')).toEqual(false);
});
