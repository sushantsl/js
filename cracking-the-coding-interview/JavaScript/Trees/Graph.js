/*
5, 7, 11, 2, 8, 1, 15, 13

        5
      /   \
    7     11
  /  \   /  \
  2  8   1   15
 /              \
 13              2
                 \
                 13

Traverse the above tree using DFS and BFS

DFS - 5, 7, 2, 13, 8, 11, 1, 15
BFS - 5, 7, 11, 2 , 8, 1, 15, 13
*/

class Node {
    constructor(num, adjacentNodes = []) {
        this.data = num;
        this.adjacent = adjacentNodes;
    }
};
const node1 = new Node(13);
const node2 = new Node(2, [node1]);
const node3 = new Node(8);
const node4 = new Node(1);
const node9 = new Node(13);
const node10 = new Node(2, [node9]);
const node5 = new Node(15, [node10]);
const node6 = new Node(7, [node2, node3]);
const node7 = new Node(11, [node4, node5]);
const node8 = new Node(5, [node6, node7]); //root

const visited = []; //5, 7, 2 , 13, 8 , 11, 1, 15
/*
dfs(5) //returned
    ->dfs(7) //returned
        -> dfs(2) //returned
            -> dfs(13); //returned
        -> dfs(8) //returned
    ->dfs(11) //returned
        -> dfs(1) //returned
        -> dfs(15) //returned
*/
function dfs(root) {
    if (root) {
        if (!visited.includes(root)) {
            visited.push(root);
            console.log(`${root.data} `);
            root.adjacent.forEach(node => dfs(node));
        }
    }
}

//dfs(node8);

/*
       5
      /   \
    7     11
  /  \   /  \
  2  8   1   15
 /
 13
 */
const queue = [];
/*
5 7 11 2 8 1 15 13 
*/
function bfs(root) {
    if (root) {
        queue.unshift(root);
        while (queue.length) {
            let current = queue.pop();
            if (!visited.includes(current)) {
                console.log(`${current.data} `);
                visited.push(current);
                current.adjacent.forEach(node => queue.unshift(node));
            }
        }
    }
}

//bfs(node8);