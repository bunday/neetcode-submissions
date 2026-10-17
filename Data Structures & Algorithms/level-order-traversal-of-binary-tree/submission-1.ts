/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return []
        const queue = []
        const res = []
        queue.push(root)
        while(queue.length > 0) {
            const currLen = queue.length
            const localRes = []
            for(let i=0; i<currLen; i++) {
                const curr = queue.shift()
                localRes.push(curr.val)
                if(curr.left)queue.push(curr.left)
                if(curr.right)queue.push(curr.right)
            }
            res.push(localRes)
        }
        return res
    }

}
