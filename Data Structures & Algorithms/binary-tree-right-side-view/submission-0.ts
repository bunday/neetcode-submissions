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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if(!root) return []
        const res = []
        const queue = []
        queue.push(root)
        while(queue.length > 0) {
            let len = queue.length
            const rightMost = queue[len-1]
            res.push(rightMost.val)
            for(let i=0; i<len; i++){
                const curr = queue.shift()
                if(curr.left)queue.push(curr.left)
                if(curr.right)queue.push(curr.right)
            }
           
        }

        return res
    }
}
