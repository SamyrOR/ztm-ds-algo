class BSTNode {
  left: BSTNode | null = null;
  right: BSTNode | null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}
class BinarySearchTree {
  root: BSTNode | null = null;

  constructor() {}

  insert(value: number) {
    if (this.root == null) {
      this.root = new BSTNode(value);
      return;
    }
    let currentNode = this.root;
    let isPlaced = false;
    while (!isPlaced) {
      if (value == currentNode.value) {
        throw Error('Value already exists');
      }
      if (value > currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = new BSTNode(value);
          isPlaced = true;
        } else {
          currentNode = currentNode.right;
        }
      }
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = new BSTNode(value);
          isPlaced = true;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookup(value: number) {
    let currentNode = this.root;
    while (value != currentNode?.value && currentNode) {
      if (currentNode && value > currentNode.value) {
        currentNode = currentNode.right;
      }
      if (currentNode && value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }

  remove(value: number) {
    if (!this.root) {
      throw Error("Tree doesn't exist");
    }
    let currentNode: BSTNode | null = this.root;
    let parentNode: BSTNode | null = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //Option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            }
            //if parent < current value, make left child a right child of parent
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }
          //Parent left subtree is now leftmost right subtree
          leftMostParent.left = leftMost.right;
          leftMost.right = currentNode.right;
          leftMost.left = currentNode.left;
          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list: number[] = [];
    let queue: BSTNode[] = [];
    if (currentNode === null) {
      throw Error('The tree is empty');
    }
    queue.push(currentNode);
    while (queue.length > 0) {
      let firsNode = queue.shift();
      if (!firsNode) {
        break;
      }
      currentNode = firsNode;
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchR(queue: BSTNode[], list: number[]) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    if (!currentNode) {
      return list;
    }
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(traverse(tree.root!));
console.log(tree.lookup(67));
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchR([tree.root!], []));

//     9
//  4     20
//1  6  15  170

function traverse(node: BSTNode) {
  const tree = { value: node };
  tree.value.left = node.left === null ? null : traverse(node.left);
  tree.value.right = node.right === null ? null : traverse(node.right);
  return tree.value;
}
