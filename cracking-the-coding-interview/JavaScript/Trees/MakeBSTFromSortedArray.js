/*
  Given a sorted array, create a Binary search tree out of it with minimum height.
    Input 1- [1,2,3]
  Output     2
            /  \
        1			3
  Input 2- [2, 6, 9 , 23, 56, 101, 150]
  Output -            23
                    /    \
                   6     101
                  / \    / \
                 2   9  56  150

  Input 3- [1, 5]
  Output -    1
                                \
                    5
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function addNode(root, num) {
    if (root) {
        if (num < root.num) {
            root.left = addNode(root.left, num);
        } else if (num > root.num) {
            root.right = addNode(root.right, num);
        }
    }
    root = new Node(num);
    return root;
}