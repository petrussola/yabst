![npm](https://img.shields.io/npm/v/yabst?style=plastic)

# Yet Another Binary Search Tree for Node.js #

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
bst.search(10)
```

### Methods ###

`bst.insert(number)`
Inserts number in the Binary Search Tree. Throws an error if trying to pass value other than a number.

`bst.remove(number)`
Removes number from the Binary Search Tree. Value of node will be replaced by minimum value from the right hand side node and tree. Throws an error if trying to pass value other than a number.

`bst.search(number)`
Returns node if value is found. Returns null if not found or Binary Search Tree does not exist. Throws an error if trying to pass value other than a number.

`bst.cleanup()` 
Clears Binary Search Tree and sets root node to null.

### Licence ###

Copyright 2020 Pere Solà

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
