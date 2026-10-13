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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(!root) return 0
        const stack = []
        stack.push([root, 1])
        let maxLevel = 0
        while(stack.length > 0) {
            const [curr, level] = stack.pop()
            maxLevel = Math.max(maxLevel, level)
            if(curr.left)stack.push([curr.left, level+1])
            if(curr.right)stack.push([curr.right, level+1])
        }
        return maxLevel
    }
}
