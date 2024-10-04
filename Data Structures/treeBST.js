/*

* Binary Search Tree *

      ROOT
     /   \
 Smaller  Bigger
 
*/

class Node {
  constructor() {
    this.left = null;
    this.right = null;
    this.value = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    //! No Root (Tree is empty) ==> New node is the root.
    if (this.root === null) {
      this.root = newNode;
    }
    //! Root Exists ==> Start traversing from the root.
    else {
      let currentNode = this.root;

      while (true) {
        //* Go LEFT ⬅️
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          //* Keep Searching for node location
          currentNode = currentNode.left;
        }
        //* Go RIGHT ↪️
        else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          //* Keep Searching for node location
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {}
}

//       9
//   4      20
// 1   6  15  170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));

// Recursive function to check correct tree implementation
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
