# Binary Search Tree for Node.js #

This module implements a Binary Search Tree. And it is my first npm module ever. Go easy on the issues.

### Installation ###

```
npm install yabst
```

### Usage ###

```
const BinarySearchTree = require('yabst);

// Create a binary search tree
const bst = new BinarySearchTree();

// Insert value
bst.insert(10);
bst.insert(5);
bst.insert(15);

// Removes value
bst.remove(5);
bst.remove(15);

// Returns root node
bst.getRootNode() 

// Search value 
// Returns node if found, null if not found
bst.search(bst.root, 10)
```
